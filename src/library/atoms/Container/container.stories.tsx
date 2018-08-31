import * as React from "react";

import { map } from "lodash";

import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../../theme/defaultTheme';
import { ThemeColor } from '../../theme/interface/colors';
import { WidthOption } from "../../theme/interface/width";
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
        <Container type={ContainerType.Background}>
          <Container type={ContainerType.MainContent}>
            <div>Div 1</div>
            <div>Div 2</div>
            <div>Div 3</div>
          </Container>
        </Container>
      </ThemeProvider>
  ))
  .add("palette", () => (
      <ThemeProvider theme={defaultTheme}>
        <Container type={ContainerType.Background}>
            {map(defaultTheme.colors, (k: string, v: ThemeColor) => (
              <Container key={k} type={ContainerType.Card} config={{ backgroundColor: v }} />
            ))}
        </Container>
      </ThemeProvider>
  ));