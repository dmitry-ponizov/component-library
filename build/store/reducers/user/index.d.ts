import { IUserState, IUserInfo } from './types'
export declare const getUserDataRequest: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<string>,
  getUserDataSuccess: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<IUserInfo, string>,
  getUserDataFailure: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<
    {
      error: string
    },
    string
  >
export declare const reducer: import('redux').Reducer<IUserState, import('redux').AnyAction>
