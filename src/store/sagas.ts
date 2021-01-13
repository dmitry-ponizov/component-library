import { all, takeEvery, call, put } from 'redux-saga/effects'
import apiMiddleware from '../services/api_middleware'
import { getUserDataFailure, getUserDataRequest, getUserDataSuccess } from './redux-toolkit'

export function* getUserData(api: any) {
  try {
    const { data } = yield call(api, {
      url: '/user',
    })
    yield put(getUserDataSuccess({ ...data, id: data.user_id }))
  } catch (e) {
    yield put(getUserDataFailure(e))
  }
}
export default function* root() {
  yield all([takeEvery(getUserDataRequest, getUserData, apiMiddleware)])
}
