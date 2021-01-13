import { AxiosRequestConfig, AxiosResponse, Method } from 'axios'
export interface IApiMiddleware {
  url: string
  method: Method
  // eslint-disable-next-line
  data: any
  headers: { [key: string]: string }
  transform: boolean
  noExpirationCheck: boolean
  withCredentials?: boolean
}

export interface IError extends Error {
  response: string
}

export interface IApiRequestConfig extends Pick<AxiosRequestConfig, 'url' | 'method' | 'data' | 'headers'> {
  transform?: boolean
}
type TResponse<T> = Promise<AxiosResponse<T>['data']>
type TConfig<T extends IApiRequestConfig> = IApiRequestConfig & T

export interface IApi<C extends IApiRequestConfig = IApiRequestConfig, R = any> {
  (config?: TConfig<C>): TResponse<R>
}
