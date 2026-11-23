import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, type PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const reducer = combineReducers({});

const config: PersistConfig<RootState> = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(config, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
