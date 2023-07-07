import { configureStore } from '@reduxjs/toolkit';

import rootReducer, { initialState } from './rootReducer';
import epicMiddleware, { rootEpic } from './rootEpic';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware().concat(epicMiddleware),
  devTools: true
});

epicMiddleware.run(rootEpic);

export default store;