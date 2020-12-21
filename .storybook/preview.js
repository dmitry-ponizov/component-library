import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { addDecorator } from "@storybook/react";
import theme from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
