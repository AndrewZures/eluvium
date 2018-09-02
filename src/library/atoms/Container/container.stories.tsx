import * as React from "react";

import { map } from "lodash";

import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../../theme/defaultTheme';
import { ThemeColor } from '../../theme/interface/colors';
import { Container } from "./Container";
import { IContainerConfig } from './types';

storiesOf("Library/Atoms/Component", module)
  .add("default", () => (
    <ThemeProvider theme={defaultTheme}>
      <Container type="background" />
    </ThemeProvider>
  ))
  .add("with overrides", () => {
    const config: Partial<IContainerConfig> = {
      backgroundColor: 'error',
      width: 'half_screen',
    };

    return (
      <ThemeProvider theme={defaultTheme}>
        <Container custom={config} />
      </ThemeProvider>
    );
  })
  .add("main content", () => (
      <ThemeProvider theme={defaultTheme}>
        <Container type="background">
          <Container type="main_content">
            <div>Div 1</div>
            <div>Div 2</div>
            <div>Div 3</div>
          </Container>
        </Container>
      </ThemeProvider>
  ))
  .add("palette", () => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container type="background">
            {map(defaultTheme.colors, (k: string, v: ThemeColor) => (
              <Container key={k} type="card" custom={{ backgroundColor: v }} />
            ))}
        </Container>
      </ThemeProvider>
    )
  })
  .add("dropdown", () => (
      <ThemeProvider theme={defaultTheme}>
        <Container type="background">
          <Container type="dropdown">
              {map(defaultTheme.colors, (k: string, v: ThemeColor) => <div>{v}</div>)}
          </Container>
        </Container>
      </ThemeProvider>
  ))
  .add("empty", () => (
      <div>Hi</div>
));