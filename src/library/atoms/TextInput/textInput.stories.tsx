import * as React from "react";

import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../../theme/defaultTheme';
import { TextInput } from "./TextInput";
import { TextInputType } from './types';

storiesOf("Library/Atoms/TextInput", module)
  .add("default", () => (
    <ThemeProvider theme={defaultTheme}>
      <TextInput
        placeholder="Placeholder"
        type={TextInputType.Standard}
      />
    </ThemeProvider>
  ))
  .add("minimal", () => (
    <ThemeProvider theme={defaultTheme}>
      <TextInput
        placeholder="Placeholder"
        type={TextInputType.Minimal}
      />
    </ThemeProvider>
  ))