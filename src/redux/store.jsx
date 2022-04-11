import { configureStore } from "@reduxjs/toolkit";
import acessTokenSlice from "./acessTokenSlice";

export default configureStore({
    reducer: {
        accessToken: acessTokenSlice
    }
})