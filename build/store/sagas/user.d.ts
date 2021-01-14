import { IApi } from '../../services/types'
export declare function getUserData(
  api: IApi
): Generator<
  | import('redux-saga/effects').CallEffect<any>
  | import('redux-saga/effects').PutEffect<{
      payload: {
        error: string
      }
      type: string
    }>,
  void,
  {
    data: any
  }
>
