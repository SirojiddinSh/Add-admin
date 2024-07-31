import { fetchBaseQuery, retry, createApi } from "@reduxjs/toolkit/query/react";

const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("token");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQuery = async (args, api, extraOptions) => {
    return await rawBaseQuery(args, api, extraOptions);
};

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

const api = createApi({
    reducerPath: "myApi",
    baseQuery: baseQueryWithRetry,
    tagTypes: ["WORKER"],
    endpoints: (build) => ({}),
});

export default api;
