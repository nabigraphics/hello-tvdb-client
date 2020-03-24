import React, { FC } from "react";
import styled from "lib/styles/styled";
import SearchSeries from "components/search/SearchSeries";

const SearchContainer: FC = () => {
  return (
    <SearchContainerBlock>
      <SearchSeries />
    </SearchContainerBlock>
  );
};

const SearchContainerBlock = styled.div`
  margin-top: 32px;
  max-width: 512px;
  width: 100%;
`;

export default SearchContainer;
