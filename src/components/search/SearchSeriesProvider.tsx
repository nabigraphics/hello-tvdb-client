import React, {
  createContext,
  FC,
  Reducer,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { Subject, throwError } from "rxjs";
import { requestGET, requestPOST } from "lib/api";
import { catchError, map } from "rxjs/operators";

type SearchSeriesState = {
  text: string;
  data: any[];
  loading: boolean;
  error: boolean;
};

type SearchSeriesContext = SearchSeriesState & {};

// Action Types
const SET_TEXT = "searchSeries/SET_TEXT";
const FETCH_SERIES_REQUEST = "searchSeries/FETCH_SERIES_REQUEST";
const FETCH_SERIES_SUCCESS = "searchSeries/FETCH_SERIES_SUCCESS";
const FETCH_SERIES_FAILURE = "searchSeries/FETCH_SERIES_FAILURE";
const FETCH_SERIES_CANCEL = "searchSeries/FETCH_SERIES_CANCEL";

const initialState: SearchSeriesState = {
  text: "",
  data: [],
  loading: false,
  error: false,
};

const reducer = (
  state: SearchSeriesState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case FETCH_SERIES_REQUEST:
      return {
        ...state,
        text: action.payload,
      };
    case FETCH_SERIES_SUCCESS:
      return {
        ...state,
        text: action.payload,
      };
    case FETCH_SERIES_FAILURE:
      return {
        ...state,
        text: action.payload,
      };
    case FETCH_SERIES_CANCEL:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

const SearchSeriesContext = createContext<SearchSeriesContext>(initialState);

export const useSearchSeries = () =>
  useContext<SearchSeriesContext>(SearchSeriesContext);

const SearchSeriesProvider: FC = ({ children }) => {
  const dispatch$ = useMemo(() => new Subject(), []);
  const [state, dispatch] = useReducer<Reducer<SearchSeriesState, any>>(
    reducer,
    initialState
  );
  const providerValue = useMemo(() => ({ ...state }), [state]);

  useEffect(() => {
    dispatch$.subscribe(dispatch);
    return () => {
      dispatch$.unsubscribe();
    };
  }, [dispatch$]);

  useEffect(() => {
    requestGET("/search/series", {
      params: {
        name: "소드아트",
      },
    })
      .pipe(
        map((res) => {
          console.log(res);
        })
      )
      .subscribe(
        (next) => console.log(next),
        (err) => console.log(err),
        () => console.log("complete")
      );
  }, []);

  return (
    <SearchSeriesContext.Provider value={providerValue}>
      {children}
    </SearchSeriesContext.Provider>
  );
};

export default SearchSeriesProvider;
