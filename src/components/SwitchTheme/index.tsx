import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { secondBg, text } from "../../colors";

type Theme = "light" | "dark";
const SwitchTheme = () => {
  const theme = useColorScheme();
  console.log(theme);

  return (
    <>
     
      <TouchableOpacity style={s.switch}>
        <Text style={{ color: text }}> Light theme</Text>
        <Image source={require("../../assets/icons/weather/night/113.png")} />
      </TouchableOpacity>
     
      <TouchableOpacity style={s.switch}>
        <Image source={require("../../assets/icons/weather/day/113.png")} />
        <Text style={{ color: text }}>Dark theme</Text>
      </TouchableOpacity>
     
    </>
  );
};
export default SwitchTheme;
const s = StyleSheet.create({
  switch:  {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: secondBg,
    borderRadius: 10,
  },
});
