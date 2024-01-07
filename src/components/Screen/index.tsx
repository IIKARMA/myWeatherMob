import { FC, PropsWithChildren } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { background } from "../../colors";

interface ScreenProps {
	style?: StyleProp<ViewStyle>;
}
const Screen = ({ children }: any) => {
	// eslint-disable-next-line react/react-in-jsx-scope
	return <SafeAreaView style={s.container}>{children}</SafeAreaView>;
};
export default Screen;
const s = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: background,
		paddingHorizontal: 16,
		paddingTop:40,
	},
});
