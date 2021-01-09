declare const GET_USER_DATA_REQUEST = "GET_USER_DATA_REQUEST";
declare const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
declare const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";
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
export declare const getUserDataRequestActionCreator: () => GetUserDataRequestActionType;
interface GetUserDataSuccessActionType {
    type: typeof GET_USER_DATA_SUCCESS;
    payload: IUserInfo;
}
export declare const getUserDataSuccessActionCreator: (payload: IUserInfo) => GetUserDataSuccessActionType;
interface GetUserDataFailureActionType {
    type: typeof GET_USER_DATA_FAILURE;
    payload: {
        error: string;
    };
}
export declare const getUserDataFailureActionCreator: ({ error, }: {
    error: string;
}) => GetUserDataFailureActionType;
declare type UserActionTypes = GetUserDataRequestActionType | GetUserDataSuccessActionType | GetUserDataFailureActionType;
export declare const userReducer: (state: IUserState, action: UserActionTypes) => IUserState;
export declare function getUserData(api: any): Generator<import("redux-saga/effects").CallEffect<unknown> | import("redux-saga/effects").PutEffect<GetUserDataSuccessActionType> | import("redux-saga/effects").PutEffect<GetUserDataFailureActionType>, void, {
    data: any;
}>;
declare const store: import("redux").Store<import("redux").CombinedState<{
    user: IUserState;
}>, import("redux").AnyAction> & {
    dispatch: {};
};
export default store;
