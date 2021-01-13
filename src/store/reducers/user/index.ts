import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState, IUserInfo } from "./types";

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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserDataRequest: (state) => {
      state.fetching = true;
      state.error = "";
    },
    getUserDataSuccess: (state, { payload }: PayloadAction<IUserInfo>) => {
      state.fetching = false;
      state.user = payload;
    },
    getUserDataFailure: (
      state,
      { payload }: PayloadAction<{ error: string }>
    ) => {
      state.error = payload.error;
    },
  },
});

export const {
  getUserDataRequest,
  getUserDataSuccess,
  getUserDataFailure,
} = userSlice.actions;

export const { reducer } = userSlice;
