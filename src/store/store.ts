import { combineReducers, configureStore } from "@reduxjs/toolkit";

 
// const store = configureStore({
// 	reducer: {
//  		weatherSlice,
// 		[weatherApi.reducerPath]: weatherApi.reducer },
// 	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware)
// })
// // The store now has redux-thunk added and the Redux DevTools Extension is turned onß v
// setupListeners(store.dispatch)
// export default store

import { ConfigureStoreOptions } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import weather from "./weatherSlice";
import theme from "./themeSlice";

const createStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
  configureStore({
    reducer: {
      weather: weather,
      theme: theme,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat( ),
    ...options,
  })

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
