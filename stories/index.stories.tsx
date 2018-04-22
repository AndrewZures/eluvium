import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { Button } from '../src/styled/cp/components';

storiesOf('Button', module)
  .add('with text', () => (
    <button>hello</button>
  ));