import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi, cryptoNewsApi } from "../services/index";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
})