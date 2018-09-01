import * as React from "react";

import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../../theme/defaultTheme';
import { TextDropdown } from "./TextDropdown";
import { TextDropdownType } from './types';

storiesOf("Library/Molecules/TextDropdown", module)
  .add("default", () => (
    <ThemeProvider theme={defaultTheme}>
      <TextDropdown
        placeholder="Placeholder"
        type={TextDropdownType.Standard}
      />
    </ThemeProvider>
  ))
  .add("minimal", () => (
    <ThemeProvider theme={defaultTheme}>
      <TextDropdown
        placeholder="Placeholder"
        type={TextDropdownType.Minimal}
      />
    </ThemeProvider>
  ))