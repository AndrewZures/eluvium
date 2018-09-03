import * as React from "react";

import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../../theme/defaultTheme';
import { Text } from './Text';
import { ITextConfig } from './types';

storiesOf("Library/Atoms/Text", module)
  .add("default", () => {
    const custom: Partial<ITextConfig> = {
      focus: { color: 'error' },
      hover: { color: 'success' },
    }

    return (
    <ThemeProvider theme={defaultTheme}>
        <Text custom={custom} >Howdy</Text>
    </ThemeProvider>
  )})