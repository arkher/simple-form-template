import axios, { AxiosRequestConfig } from "axios";

const DefaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const getAxiosInstance = (baseURL?: string, config?: AxiosRequestConfig) => {
  return axios.create({
    baseURL,
    headers: {
      ...DefaultHeaders,
    },
    ...config,
  });
};

export default getAxiosInstance;
