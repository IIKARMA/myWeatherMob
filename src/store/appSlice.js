import { createSlice } from "@reduxjs/toolkit";

const initialState = { themeStyle: "light" };

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {},
});

export const {} = appSlice.actions;
export default appSlice.reducer;
