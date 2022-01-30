import { DefaultTheme } from "styled-components";

/**
 * Maps the kind of {@link Button} to the color it should be
 * @see {@link Button}
 */
export const kindToColor = (theme: DefaultTheme, kind?: string) => {
  switch (kind) {
    case 'primary': return theme.colors.primary;
    case 'secondary': return theme.colors.contrast;
    default: return theme.colors.primary;
  }
};

/**
 * Maps the kind of {@link Button} to the color its text/icon should be
 * @see {@link Button}
 */
export const kindToTextColor = (theme: DefaultTheme, kind?: string) => {
  switch (kind) {
    case 'primary': return theme.colors.contrast;
    case 'secondary': return theme.colors.primary;
    default: return theme.colors.contrast;
  }
};
