import * as React from "react";

import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../../theme/defaultTheme';
import { Icon } from './Icon';

storiesOf("Library/Atoms/Icon", module)
  .add("default", () => {
    return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Icon
          src='./we-have-moved-truck.svg'
          alt="we've moved"
        />
        <Icon
          src='./we-have-moved-truck.svg'
          alt="we've moved"
          custom={{
            height: 'input',
            width: 'small'
          }}
        />
        <Icon
          src='./we-have-moved-truck.svg'
          alt="we've moved"
          custom={{
            height: 'small',
            width: 'half_screen'
          }}
        />
      </div>
    </ThemeProvider>
  )})