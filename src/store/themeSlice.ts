import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
import { WeatherStates, getWeatherArg } from "./types";
import { ThemeState } from "../colors";
import { Appearance } from "react-native";
export const LightTheme: ThemeState = {
  theme: { background: "#A4A5AE", text: "#fff", secondBg: "#33333093" },
};
export const DarkTheme: ThemeState = {
  theme: { background: "#333", text: "#fff", secondBg: "#222" },
};
const initialState: ThemeState = {
  theme:
    Appearance.getColorScheme() === "light"
      ? LightTheme.theme
      : DarkTheme.theme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      const theme = Appearance.getColorScheme();
      state.theme = theme === "dark" ? LightTheme.theme : DarkTheme.theme;
    },
  },
});
export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
