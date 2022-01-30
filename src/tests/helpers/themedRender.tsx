import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import MainTheme from "../../assets/themes/MainTheme";

export const themedRender = (ui: any, {...renderOptions} = {}) => {
  return render(
      <ThemeProvider theme={MainTheme}>{ui}</ThemeProvider>,
      renderOptions
  )
}
