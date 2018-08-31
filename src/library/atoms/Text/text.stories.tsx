import * as React from "react";

import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../../theme/defaultTheme';
import { Text } from './Text';

storiesOf("Library/Atoms/Text", module)
  .add("default", () => (
    <ThemeProvider theme={defaultTheme}>
        <Text>Howdy</Text>
    </ThemeProvider>
  ))