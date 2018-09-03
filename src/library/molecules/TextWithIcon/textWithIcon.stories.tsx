import * as React from "react";

import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../../theme/defaultTheme';
import { TextWithIcon } from "./TextWithIcon";

storiesOf("Library/Molecules/TextWithIcon", module)
  .add("default", () => (
    <ThemeProvider theme={defaultTheme}>
      <TextWithIcon
        text={{ placeholder: 'Search...' }}
        icon={{
            onClick: () => window.console.log('hi'),
            src: './we-have-moved-truck.svg',
        }}
      />
    </ThemeProvider>
  ))
  .add("right-aligned", () => (
    <ThemeProvider theme={defaultTheme}>
      <TextWithIcon
        iconPosition='right'
        text={{ placeholder: 'Search...' }}
        icon={{
            onClick: () => window.console.log('hi'),
            src: './we-have-moved-truck.svg',
        }}
      />
    </ThemeProvider>
  ))