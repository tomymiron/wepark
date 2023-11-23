import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const COLORS = {
  dark_01: "#0F1112",
  dark_02: "#131517",
  dark_03: "#18191C",
  dark_04: "#131517CC",
  dark_05: "#505153",
  dark_06: "#1B1D20",
  dark_07: "#EEF0FA29",
  dark_08: "#171A1E",
  dark_09: "#0F0F0F",
  dark_10: "#090A0A",
  dark_11: "#1E1F25",

  gray_01: "#7d7d7d",
  gray_02: "#A9ABB5",
  gray_03: "#272628",

  white_01: "#EEF0FA",
  white_02: "#EEF0FA50",
  white_03: "#B8BAC2",
  white_04: "#EDF2F3",

  red_01: "#AC2525",
  red_02: "#F54A4A",

  blue_01: "#36B9CC",
  blue_02: "#0A7B8B",
  blue_03: "#349DB1",
  blue_04: "#00E0FF",
  blue_05: "#295FD3",
  blue_06: "#252D41",
  blue_07: "#3E5CB2",
  blue_08: "#1E1F29",
  blue_09: "#5478E0",

  purple_01: "#52287B",
  purple_02: "#9747FF",


  green_01: "#2BCCA2",
  
  yellow_01: "#F6C74E",

  transparent_01: "#EEF0FA20",
  transparent_02: "#0F111270",
  transparent_03: "#36B9CC70",
};

const SIZES = {
  _f: 1,
  _e: 2,
  _d: 3,
  _c: 4,
  _b: 6,
  _a: 8,
  a: 10,
  b: 12,
  c: 14,
  d: 16,
  e: 20,
  f: 26,
  g: 28,
  h: 33,
  i: 36,
  j: 40,
  k: 42,
  l: 46,
  m: 48,
  n: 50,
  o: 52,
  p: 56,
  q: 60,
  r: 64,
  s: 68,
  t: 70,
  w: 95,
  x: 100,
  z: 110,
  zw: 140,
  height,
  width,
};


export { COLORS, SIZES };