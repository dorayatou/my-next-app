import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import api from "./api";
import graphSlice from "./graphSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    graphSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
