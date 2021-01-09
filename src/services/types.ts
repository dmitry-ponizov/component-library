import { Method } from "axios";

export interface IApiMiddleware {
  url: string;
  method: Method;
  // eslint-disable-next-line
  data: any;
  headers: { [key: string]: string };
  transform: boolean;
  noExpirationCheck: boolean;
  withCredentials?: boolean;
}

export interface IError extends Error {
  response: string;
}

export interface IApi {
  context: unknown;
  fn: (this: unknown, ...args: any[]) => any;
}
