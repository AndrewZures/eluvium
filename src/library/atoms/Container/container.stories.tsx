import * as React from "react";

import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme/defaultTheme";
import { ThemeColor, WidthOption } from '../../theme/interface';
import { Container } from "./Container";
import { ContainerType, IContainerConfig } from './types';

storiesOf("Library/Atoms/Component", module)
  .add("default", () => (
    <ThemeProvider theme={defaultTheme}>
      <Container type={ContainerType.Background} />
    </ThemeProvider>
  ))
  .add("with overrides", () => {
    const config: Partial<IContainerConfig> = {
      backgroundColor: ThemeColor.Error,
      width: WidthOption.HalfScreen,
    };

    return (
      <ThemeProvider theme={defaultTheme}>
        <Container config={config} />
      </ThemeProvider>
    );
  })
  .add("main content", () => (
      <ThemeProvider theme={defaultTheme}>
        <Container type={ContainerType.Background} >
          <Container type={ContainerType.MainContent} />
        </Container>
      </ThemeProvider>
  ));