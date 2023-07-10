import { AxiosPromise, ResponseType } from "axios";
import Storage from "../modules/Storage";
import getAxiosInstance from "./axiosConfig";
import { httpMethod } from "./core/http.core";

export type EndpointConfig = {
  method: httpMethod;
  path: string;
  data?: object;
  headers?: object;
  params?: object;
  responseType?: ResponseType;
};

export type APIType = "api";
interface IAPIUrl {
  [name: string]: string;
}

const APIUrl: IAPIUrl = {
  api: "https://54e0200b-f7be-4094-b52e-49516cb14075.mock.pstmn.io",
};

export const requestApi = async <T>(
  config: EndpointConfig,
  api: APIType = "api"
): Promise<AxiosPromise<T>> => {
  const { data, path, headers, params, method, responseType } = config;

  return data
    ? getAxiosInstance(APIUrl[api])?.[method]<T>(path, data, {
        headers,
        params,
        responseType,
      })
    : getAxiosInstance(APIUrl[api])?.[method]<T>(path, {
        headers,
        params,
        responseType,
      });
};
