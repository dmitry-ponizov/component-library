import createSagaMiddleware from 'redux-saga'
import { IUserState } from './../../build/store/redux-og.d'
import { createSlice, PayloadAction, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootSaga from './sagas'

const initialState: IUserState = {
  memberInfo: {
    current_space: '',
    id: '',
    logo_orig: '',
    logo_thumb: '',
  },
  role: '',
  fetching: false,
  error: '',
  user: {
    user_id: '',
    firstname: 'Dima',
    lastname: 'Ponizov',
    email: '',
    is_staff_manager: false,
    error: '',
  },
}

interface IUserInfo {
  email: string
  error: string
  firstname: string
  lastname: string
  user_id: string
  is_staff_manager: boolean
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserDataRequest: (state) => {
      state.fetching = true
      state.error = ''
    },
    getUserDataSuccess: (state, { payload }: PayloadAction<IUserInfo>) => {
      state.fetching = false
      state.user = payload
    },
    getUserDataFailure: (state, { payload }: PayloadAction<{ error: string }>) => {
      state.error = payload.error
    },
  },
})

export const { getUserDataRequest, getUserDataSuccess, getUserDataFailure } = userSlice.actions

export const userReducer = {
  user: userSlice.reducer,
}

interface IApi {
  context: unknown
  fn: (this: unknown, ...args: any[]) => any
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

const store = configureStore({
  reducer: userReducer,
  middleware,
})
sagaMiddleware.run(rootSaga)

export default store
