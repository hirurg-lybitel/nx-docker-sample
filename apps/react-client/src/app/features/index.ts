import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = `http://localhost:4040/`;
export const baseUrlApi = `${baseUrl}api/`;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlApi, credentials: 'include' }),
  endpoints: (builder) => ({
    getData: builder.query<any[], void>({
      query: () => 'films',
    })
  })
});

export const {
  useGetDataQuery
} = api;
