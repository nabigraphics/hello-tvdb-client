import Axios, {
  AxiosRequestConfig,
  AxiosInstance,
  CancelTokenStatic,
} from "axios";
import { from, Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

type InstanceT = AxiosInstance & {
  CancelToken?: CancelTokenStatic;
  isCancel?(value: any): boolean;
};
console.log(process.env);
const axiosInstance: InstanceT = Axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 10000,
});

axiosInstance.CancelToken = Axios.CancelToken;
axiosInstance.isCancel = Axios.isCancel;
const source = axiosInstance.CancelToken.source();

export const requestGET = (url: string, config?: AxiosRequestConfig) => {
  return new Observable((subscriber) => {
    from(axiosInstance.get(url, { cancelToken: source.token, ...config })).pipe(
      map((res) => subscriber.next(res.data)),
      catchError((err) => of(subscriber.error(err)))
    );

    return () => {
      source.cancel();
    };
  });
};

export const requestPOST = (
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => {
  return new Observable((subscriber) => {
    from(
      axiosInstance.post(url, data, { cancelToken: source.token, ...config })
    ).pipe(
      map((res) => subscriber.next(res.data)),
      catchError((err) => of(subscriber.error(err)))
    );

    return () => {
      source.cancel();
    };
  });
};
