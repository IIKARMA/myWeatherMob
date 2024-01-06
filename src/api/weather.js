/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
	reducerPath: "weather",
	baseQuery: fetchBaseQuery({
		baseUrl:
			"https://api.weatherapi.com/v1/search.json?key=6229d07f626b48eaba6140616240501",
	}),
	tagTypes: ["WEATHER"],
	endpoints: (builder) => ({
		getWeatherThreeDay: builder.query({
			query: () => `q=London`,
			transformResponse: (response) => response,
			providesTags: ["WEATHER"],
		}),
	}),
});

export const { endpoints, reducerPath, reducer, middleware } = weatherApi;

export const { useGetWeatherThreeDayQuery } = weatherApi;
//http://api.weatherapi.com/v1/current.json?key=8a8565f7c331439c8a5115344240501&q=48.32423,28.31244&aqi=no
