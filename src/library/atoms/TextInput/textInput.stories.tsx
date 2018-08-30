import * as React from "react";

import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../../theme/defaultTheme';
import { ThemeColor } from "../../theme/interface";
import { TextInput } from "./TextInput";
import { TextInputType } from './types';

storiesOf("Library/Atoms/TextInput", module)
  .add("default", () => (
    <ThemeProvider theme={defaultTheme}>
      <TextInput
        value="howdy"
        placeholder="Placeholder"
        styleType={TextInputType.Standard}
        hover={{ color: ThemeColor.Primary }}
        focus={{ color: ThemeColor.Success }}
        />
    </ThemeProvider>
  ))