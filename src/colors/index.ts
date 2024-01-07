import useCheckDarkTheme from "../hooks/useCheckDarkTheme";

export const background = useCheckDarkTheme() ? "#333" : "#fff";
export const text = useCheckDarkTheme() ? "#fff" : "#333";
export const secondBg = useCheckDarkTheme() ? "#222" : "#333";
export interface ThemeState {
  theme: {
    background: string;
    text: string;
    secondBg: string;
  };
}
