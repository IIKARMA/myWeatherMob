import { StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useTypedSelector } from "../../store/store";

const Screen = ({ children }: any) => {
	const globaltheme = useTypedSelector((state) => state.theme.theme);

	return (
    <SafeAreaView
      style={[s.container, { backgroundColor: globaltheme.background }]}
    >
      {children}
    </SafeAreaView>
  );
};
export default Screen;
const s = StyleSheet.create({
	container: {
		flex: 1,
				paddingHorizontal: 16,
		paddingTop: 40,
	},
});
