import api from "./index";

export const workerApi = api.injectEndpoints({
    endpoints: (build) => ({
        getWorkers: build.query({
            query: (params) => ({
                url: "/workers",
                params,
            }),
            providesTags: ["WORKER"],
        }),
        deleteUser: build.mutation({
            query: (id) => ({
                url: `/workers/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["WORKER"],
        }),
    }),
});

export const { useGetWorkersQuery, useDeleteUserMutation } = workerApi;
