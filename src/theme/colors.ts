import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#4169E1",
  primaryBright: "#00008B",
  primaryDark: "#F0FFFF",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  heading:"#000000",
  navBar: "	#F5F5F5",
  sideBar: "	#F5F5F5",
  background: "linear-gradient(to right, #1e3c72, #2a5298)",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "linear-gradient(to right, #fc00ff, #00dbde)",
  tertiary: "#CCCCFF",
  text: "#000080",
  textDisabled: "#BDC2C4",
  textSubtle: "#000",
  borderColor: "#E9EAEB",
  card: "#F5F5F5",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  heading: "#FFFFFF",
  navBar: "#27262c",
  sideBar: "#27262c",
  secondary: "#9A6AFF",
  background: "linear-gradient(to right, #4b6cb7, #182848)",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "linear-gradient(to right, #fc00ff, #00dbde)",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
