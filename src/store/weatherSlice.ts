import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
import { WeatherStates, getWeatherArg } from "./types";

const initialState: WeatherStates = {
  cityName: "",
  weatherToday: {},
  weatherTreDays: [],
  weatherTwoWeek: {},
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (location: string) => {
    console.log("check");
    const response = await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=52c3296488684ded959221833240601&q=${location}&days=3&aqi=no&alerts=no`
      )
      .then((res) => res.data);
    return response;
  }
);

export const fetchWeatherRangeDays = createAsyncThunk(
  "weather/fetchWeatherThreeDays",
  async ({ city, days }: getWeatherArg) => {
    console.log("check");
    const response = await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=52c3296488684ded959221833240601&q=${city}&days=${days}&&aqi=no&alerts=no`
      )
      .then((res) => res.data);
    return response;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchWeather.fulfilled, (state, action) => {
        // Add user to the state array

        state.weatherToday = action.payload;
      })
      .addCase(fetchWeatherRangeDays.fulfilled, (state, action) => {
        // Add user to the state array
        console.log("fulfilled", action.payload?.forecast?.forecastday);
        state.weatherTreDays = action.payload?.forecast?.forecastday;
      });
  },
});
export const {} = weatherSlice.actions;
export default weatherSlice.reducer;

export const selectGlobalWeather = (state: RootState) =>
  state.weather.weatherToday;
