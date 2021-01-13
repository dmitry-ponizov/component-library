export default function configStore(): import('@reduxjs/toolkit').EnhancedStore<
  {
    user: import('./reducers/user/types').IUserState
  },
  import('redux').AnyAction,
  import('redux').Middleware<{}, any, import('redux').Dispatch<import('redux').AnyAction>>[]
>
