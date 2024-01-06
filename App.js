/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StyleSheet, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import Home from "./src/features/Home";
import { useGetWeatherThreeDayQuery } from "./src/api/weather";
import { Provider } from "react-redux";
import store from "./src/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

function App() {
	return (
		<ApiProvider store={store}>
			<Home />
		</ApiProvider>
	);
}

export default App;
