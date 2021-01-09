import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { takeLatest, all, delay } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

// constants
const GET_USER_DATA_REQUEST = "GET_USER_DATA_REQUEST";
const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";

// Actions && Action type

interface GetUserDataRequestActionType {
  type: typeof GET_USER_DATA_REQUEST;
}

interface IUserInfo {
  email: string;
  error: string;
  firstname: string;
  lastname: string;
  user_id: string;
  is_staff_manager: boolean;
}

interface IMemberInfo {
  current_space: string;
  id: string;
  logo_orig: string;
  logo_thumb: string;
}

export interface IUserState {
  memberInfo: IMemberInfo;
  role: string;
  fetching: boolean;
  error: string;
  user: IUserInfo;
}

export const getUserDataRequestActionCreator = (): GetUserDataRequestActionType => {
  return {
    type: GET_USER_DATA_REQUEST,
  };
};

interface GetUserDataSuccessActionType {
  type: typeof GET_USER_DATA_SUCCESS;
  payload: IUserInfo;
}

export const getUserDataSuccessActionCreator = (
  payload: IUserInfo
): GetUserDataSuccessActionType => {
  return {
    type: GET_USER_DATA_SUCCESS,
    payload,
  };
};

interface GetUserDataFailureActionType {
  type: typeof GET_USER_DATA_FAILURE;
  payload: { error: string };
}

export const getUserDataFailureActionCreator = ({
  error,
}: {
  error: string;
}): GetUserDataFailureActionType => {
  return {
    type: GET_USER_DATA_FAILURE,
    payload: {
      error,
    },
  };
};

// Reducers

const initialState: IUserState = {
  memberInfo: {
    current_space: "",
    id: "",
    logo_orig: "",
    logo_thumb: "",
  },
  role: "",
  fetching: false,
  error: "",
  user: {
    user_id: "",
    firstname: "Dima",
    lastname: "Ponizov",
    email: "",
    is_staff_manager: false,
    error: "",
  },
};

type UserActionTypes =
  | GetUserDataRequestActionType
  | GetUserDataSuccessActionType
  | GetUserDataFailureActionType;

export const userReducer = (
  state: IUserState = initialState,
  action: UserActionTypes
) => {
  switch (action.type) {
    case GET_USER_DATA_SUCCESS: {
      return { ...state, user: action.payload };
    }
    case GET_USER_DATA_FAILURE: {
      return { ...state, error: action.payload.error };
    }
    default: {
      return state;
    }
  }
};

const reducers = combineReducers({
  user: userReducer,
});

// Saga
const sagaMiddleware = createSagaMiddleware();

function* getUserData() {
  try {
    yield delay(10000);
    console.log("sdfsdf");
  } catch (e) {
    console.log(e.message);
  }
}

function* rootSaga() {
  yield all([takeLatest(GET_USER_DATA_REQUEST, getUserData)]);
}

/// Store
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

export default store;
