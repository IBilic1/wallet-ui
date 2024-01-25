import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AddUserTask, UserTask } from '../../types/auth/types'

const baseQuery = (url: string) => {
  return fetchBaseQuery(
    {
      baseUrl: url,
      prepareHeaders: async (headers) => {
        const access_token = localStorage.getItem('access_token');
        if (access_token && access_token !== "undefined") {
          headers.append('Authorization', 'Bearer ' + access_token);
        }
        return headers;
      }
    });
}

const BACKED_URL = process.env.REACT_APP_BACKEND
export const userTaskApi = createApi({
  reducerPath: 'userTask',
  baseQuery: baseQuery(BACKED_URL + 'user-task' || ''),
  tagTypes: ['userTask'],
  endpoints: (builder) => ({
    getAllContents: builder.query<UserTask[], void>({
      query: () => '/all',
      providesTags: ['userTask'],
      keepUnusedDataFor: 0,
    }),
    getUsersContents: builder.query<UserTask[], void>({
      query: () => '/task',
      providesTags: ['userTask'],
      keepUnusedDataFor: 0,
    }),
    addUserTask: builder.mutation<void, AddUserTask>({
      query: (payload) => ({
        url: '/task',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['userTask'],
    }),
  }),
})

export const {
  useAddUserTaskMutation,
  useGetAllContentsQuery, useGetUsersContentsQuery,
} = userTaskApi