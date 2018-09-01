import * as React from "react";

import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../../theme/defaultTheme';
import { TextQuestion } from "./TextQuestion";

import { Text } from '../../atoms/Text/Text';
import { TextInput } from '../../atoms/TextInput/TextInput';

storiesOf("Library/Molecules/TextQuestion", module)
  .add("default", () => (
    <ThemeProvider theme={defaultTheme}>
      <TextQuestion>
          <Text>Text input label</Text>
          <TextInput placeholder="Placeholder">
            <span><img src="./we-have-moved-truck.svg" alt="we've moved" height="20px" width="40px"/></span>
          </TextInput>
      </TextQuestion>
    </ThemeProvider>
  ))