
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    makeRequest: builder.mutation({
      query: ({ url, method, payload }) => ({
        url,
        method,
        body: method !== "GET" ? payload : undefined,
      }),
    }),
  }),
});

export const { useMakeRequestMutation } = api;
