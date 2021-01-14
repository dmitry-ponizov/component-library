import { IUserState } from '../reducers/user/types'
export declare const getMemberInfo: (state: { user: IUserState }) => import('../reducers/user/types').IMemberInfo
export declare const selectUser: import('reselect').OutputSelector<
  {
    user: IUserState
  },
  IUserState,
  (res: IUserState) => IUserState
>
