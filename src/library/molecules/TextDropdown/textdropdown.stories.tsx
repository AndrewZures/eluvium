import * as React from "react";

import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../../theme/defaultTheme';
import { TextDropdown } from "./TextDropdown";

storiesOf("Library/Molecules/TextDropdown", module)
  .add("default", () => {
    return (
    <ThemeProvider theme={defaultTheme}>
      <TextDropdown
        text={{ placeholder: 'Select', type: 'leftIcon', custom: { width: 'input', height: 'input'  }}}
        icon={{ type: 'leftInput', src: './we-have-moved-truck.svg' }}
      >
        <div>
            Howdy
        </div>
      </TextDropdown>
    </ThemeProvider>
  )})