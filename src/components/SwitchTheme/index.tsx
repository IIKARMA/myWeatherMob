import {
  Appearance,
  ColorSchemeName,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { secondBg, text } from "../../colors";
import { useAppDispatch, useTypedSelector } from "../../store/store";
import { switchTheme } from "../../store/themeSlice";
import { useCallback } from "react";

const SwitchTheme = () => {
  const theme: string = useColorScheme() as string;
  const dispatch = useAppDispatch();
  const globaltheme = useTypedSelector((state) => state.theme.theme);

  const themeIcons = {
    ["dark"]: require("../../assets/icons/weather/night/113.png"),
    ["light"]: require("../../assets/icons/weather/day/113.png"),
  } as const;
  const handleSwitchTheme = () => {
    dispatch(switchTheme());
    Appearance.setColorScheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={[s.switch, { backgroundColor: globaltheme.secondBg }]}
        onPress={handleSwitchTheme}
      >
        <Image source={themeIcons[theme as keyof typeof themeIcons]} />
      </TouchableOpacity>
    </View>
  );
};
export default SwitchTheme;
const s = StyleSheet.create({
  switch: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
});
