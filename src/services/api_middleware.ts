import { IApiMiddleware, IError } from "./types";
import axios, { AxiosError } from "axios";
import { defaults, isObject, isEmpty } from "lodash";
import appConfig from "../config/app_config";
const { REACT_APP_BASE_URL: baseURL } = process.env;

export default function apiMiddleware({
  url = "/",
  method = "GET",
  data = {},
  headers = {},
  transform = true,
}: IApiMiddleware) {
  defaults(headers, {
    Accept: "application/json; charset=UTF-8",
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${localStorage.getItem("fdlt.token")}`,
  });

  return axios({
    baseURL,
    method,
    url,
    headers,
    params: method === "GET" && isObject(data) && !isEmpty(data) ? data : {},
    data: transform ? JSON.stringify(data) : data,
  })
    .then((resp) => {
      if (!!resp.data.error) {
        const message = resp.data.error;
        const error = new Error(message) as IError;
        error.response = message || "";
        throw error;
      }

      if (resp.status >= 400 || resp.status === 500) {
        const msg = ((resp as unknown) as { message: string }).message;
        const error = new Error(msg) as IError;
        error.response = msg || "";
        throw error;
      }
      return resp.data;
    })
    .catch((e: Error | AxiosError) => {
      const msg = (e as AxiosError).response?.data.error || e.message;
      if (e.message) {
        const error = new Error(msg) as IError;
        error.response = msg || "";
        throw error;
      }
    });
}

export function check_token_expiration(er: AxiosError<Error>) {
  if (er?.response?.status === 403) {
    axios({
      baseURL,
      url: appConfig.services.user,
      headers: {
        Accept: "application/json; charset=UTF-8",
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("fdlt.token")}`,
      },
    }).catch(() => {
      localStorage.removeItem("fdlt.token");
      window.location.href = "/";
    });
  }
}
