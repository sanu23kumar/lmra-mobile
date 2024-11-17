/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const primaryColor = "#CD853F";
const primaryColorLight = "#CD853F22";

export const Colors = {
  light: {
    text: "#11181C",
    textLight: "#11181C99",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    primary: primaryColor,
    primaryLight: primaryColorLight,
    placeholder: "#00000088",
    card: "#fff",
    border: "#11181C99",
  },
  dark: {
    text: "#ECEDEE",
    textLight: "#ECEDEE",
    background: "#141a1c",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    primary: primaryColor,
    primaryLight: primaryColorLight,
    placeholder: "#ffffff88",
    card: "#2a2b2c",
    border: "#141a1c",
  },
};
