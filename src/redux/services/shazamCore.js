import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "09ed8fb0a0mshcf5b3972ac1030ap10829ajsnc5bf9252b347",
//     "X-RapidAPI-Host": "shazam-api7.p.rapidapi.com",
//   },
// };

// fetch("https://shazam-api7.p.rapidapi.com/search", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-api7.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "09ed8fb0a0mshcf5b3972ac1030ap10829ajsnc5bf9252b347"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: "/search" }),
  }),
});
export const { useGetTopChartsQuery } = shazamCoreApi;
