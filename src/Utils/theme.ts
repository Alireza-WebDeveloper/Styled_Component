import { colors } from "./colors";

const defaultTheme = {
  primary: colors.purple[800],
  primaryColorHover: colors.purple[900],
  primaryColorActive: colors.purple[900],
  textColor: colors.gray[200],
  body: colors.gray[100],
};

const darkTheme = {
  primary: colors.purple[200],
  primaryColorHover: colors.purple[300],
  primaryColorActive: colors.purple[500],
  textColor: colors.gray[800],
  body: colors.gray[900],
};

export { defaultTheme, darkTheme };
