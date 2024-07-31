import { configureStore } from "@reduxjs/toolkit";
import api from "../api";
import { reducer } from "../slices/adminSlice";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        admin: reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
