// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: () => `trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`,
    }),
    getMovieById: builder.query({
        query: (id) => `/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos`,
    }),
    getMoviesTopRated: builder.query({
      query: () => `/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defiqned endpoints
export const { useGetTrendingMoviesQuery, useGetMovieByIdQuery, useGetMoviesTopRatedQuery } = tmdbApi;