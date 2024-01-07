import { Appearance } from "react-native";

const useCheckDarkTheme = (): boolean => {
  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === "dark") return true;
  return false;
};
export default useCheckDarkTheme;
