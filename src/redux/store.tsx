import { configureStore } from "@reduxjs/toolkit";
import acessTokenSlice from "./acessTokenSlice";

 const  store =  configureStore({
    reducer: {
        accessToken: acessTokenSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch