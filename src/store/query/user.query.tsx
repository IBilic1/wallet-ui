import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SignUpRequest, User } from '../../types/auth/types'

const baseQuery = (url: string) => {

  return fetchBaseQuery(
    {
      baseUrl: url,
      prepareHeaders: async (headers) => {
        console.log('nananana')

        const access_token = localStorage.getItem('access_token')
        headers.append('Origin', 'http://localhost:3000')
        if (access_token && access_token !== 'undefined') {
          headers.append('Authorization', 'Bearer ' + access_token)
        }
        return headers
      },
    })
}

const BACKED_URL = process.env.REACT_APP_BACKEND
export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: baseQuery(BACKED_URL + 'user' || ''),
  tagTypes: ['user'],
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => '',
      providesTags: ['user'],
      keepUnusedDataFor: 0,
    }),
    addUser: builder.mutation<void, SignUpRequest>({
      query: (payload) => ({
        url: '/children',
        method: 'POST',
        body: payload,
      }),
    }),
    getChildren: builder.query<User[], void>({
      query: () => '/children',
      providesTags: ['user'],
      keepUnusedDataFor: 0,
    }),
  }),
})


export const {
  useGetUserQuery,
  useAddUserMutation,
  useGetChildrenQuery
} = userApi