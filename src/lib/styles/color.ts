type BaseColorsT = {
  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  primary: string;
  primary50: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;
};

export type ColorsT = BaseColorsT & {
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
};

const baseColorTokens: BaseColorsT = {
  gray50: "#fbfdff",
  gray100: "#f6f9fa",
  gray200: "#f1f4f6",
  gray300: "#d9dde0",
  gray400: "#b3b7bb",
  gray500: "#82868a",
  gray600: "#52565a",
  gray700: "#2f3034",
  gray800: "#191a1e",
  gray900: "#111114",
  primary: "#0077c4",
  primary50: "#f2fcff",
  primary100: "#d6f7ff",
  primary200: "#baf0ff",
  primary300: "#7fdaff",
  primary400: "#4dc3fd",
  primary500: "#28abf1",
  primary600: "#0f92df",
  primary700: "#0077c4",
  primary800: "#005ea3",
  primary900: "#004680",
};

const colors: ColorsT = {
  ...baseColorTokens,
  backgroundPrimary: baseColorTokens.gray900,
  backgroundSecondary: baseColorTokens.gray800,
  backgroundTertiary: baseColorTokens.gray700,
  text: {
    primary: "rgba(255,255,255,0.87)",
    secondary: "rgba(255,255,255,0.60)",
    tertiary: "rgba(255,255,255,0.38)",
  },
};

export default colors;
