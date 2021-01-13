import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'

export default function configStore() {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: true,
  })

  sagaMiddleware.run(rootSaga)

  return store
}
