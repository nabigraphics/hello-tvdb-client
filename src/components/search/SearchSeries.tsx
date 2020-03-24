import React, { FC, useEffect, useMemo } from "react";
import { Search } from "react-feather";
import Input from "components/common/Input";
import SearchMenuList from "components/search/SearchMenuList";
import { Subject } from "rxjs";
import { useSearchSeries } from "components/search/SearchSeriesProvider";
import { debounceTime } from "rxjs/operators";

const SearchSeries: FC = () => {
  const data = useSearchSeries();
  const input$ = useMemo(() => new Subject(), []);

  useEffect(() => {
    input$.pipe(debounceTime(100)).subscribe(console.log);

    return () => {
      input$.unsubscribe();
    };
  }, [input$]);
  return (
    <div>
      <Input
        type={"text"}
        placeholder={"Search tv series"}
        leftIcon={<Search />}
        // value={state}
        // onChange={(e) => console.log(e.currentTarget.value)}

        onChange={(e) => input$.next(e.currentTarget.value)}
      />
      <SearchMenuList />
    </div>
  );
};

export default SearchSeries;
