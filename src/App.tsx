import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import {
  Button as LogicButton,
  ButtonGroup as LogicButtonGroup,
} from './logic/components';

import {
  Button as CPButton,
  ButtonGroup as CPButtonGroup,
  Container,
} from './styled/cp/components';

import {
  Button as BaseButton,
  ButtonGroup as BaseButtonGroup,
} from './base/components';

import { ThemeProvider } from 'styled-components';
import baseTheme from './themes/base';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ThemeProvider theme={baseTheme}>
          <Container>
            <h2>Logic Components</h2>
            <LogicButtonGroup>
              <LogicButton onClick={this.click.bind(this, 'primary')}>Primary</LogicButton>
              <LogicButton onClick={this.click.bind(this, 'secondary')}>Secondary</LogicButton>
              <LogicButton onClick={this.click.bind(this, 'none')}>None</LogicButton>
            </LogicButtonGroup>
            <h2>Base Components</h2>
            <BaseButtonGroup>
              <BaseButton type='primary' size='large' onClick={this.click.bind(this, 'primary')}>Primary</BaseButton>
              <BaseButton type='secondary' size='medium' onClick={this.click.bind(this, 'secondary')}>Secondary</BaseButton>
            </BaseButtonGroup>
            <h2>Themed Components</h2>
            <CPButtonGroup>
              <CPButton type='primary' size='large' onClick={this.click.bind(this, 'primary')}>Primary</CPButton>
              <CPButton type='secondary' size='medium' onClick={this.click.bind(this, 'secondary')}>Secondary</CPButton>
            </CPButtonGroup>
          </Container>
        </ThemeProvider>
      </div>
    );
  }

  private click(str: string) {
    alert(str);
  }
}

export default App;
