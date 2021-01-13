import { IApi } from '../../services/types'
import { call, put } from 'redux-saga/effects'
import app_config from '../../config/app_config'
import { getUserDataFailure, getUserDataSuccess } from '../reducers/user'

export function* getUserData(api: IApi) {
  try {
    const { data } = yield call(api, {
      url: app_config.services.user,
    })
    yield put(getUserDataSuccess({ ...data, id: data.user_id }))
  } catch (e) {
    yield put(getUserDataFailure(e))
  }
}
