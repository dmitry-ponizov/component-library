import { IApiMiddleware } from "./types";
import { AxiosError } from "axios";
export default function apiMiddleware({ url, method, data, headers, transform, }: IApiMiddleware): Promise<any>;
export declare function check_token_expiration(er: AxiosError<Error>): void;
