import { all, takeEvery } from "redux-saga/effects";
import apiMiddleware from "../../services/api_middleware";
import { getUserDataRequest } from "../reducers/user";
import { getUserData } from "../sagas/user";

export default function* root() {
  yield all([
    /**
     * User
     */
    takeEvery(getUserDataRequest, getUserData, apiMiddleware),
  ]);
}
