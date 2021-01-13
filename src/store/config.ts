import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

export default function configStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ];

  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });

  let sagasManager = sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept(() => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);

      // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
      const newYieldedSagas = require("./sagas").default;
      sagasManager.cancel();
      sagasManager.toPromise().then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
}
