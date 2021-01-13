export interface IUserInfo {
  email: string;
  error: string;
  firstname: string;
  lastname: string;
  user_id: string;
  is_staff_manager: boolean;
}

export interface IMemberInfo {
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
