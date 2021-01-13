import { IUserState } from '../reducers/user/types'
import { createSelector } from 'reselect'

export const getMemberInfo = (state: { user: IUserState }) => state.user.memberInfo

export const selectUser = createSelector(
  (state: { user: IUserState }) => state.user,
  (user) => user
)
