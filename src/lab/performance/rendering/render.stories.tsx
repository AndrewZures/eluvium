import * as React from "react";

import { storiesOf } from "@storybook/react";
import Wrapper from "./Wrapper";

storiesOf("Lab/Performance", module)
  .add("rendering", () => (
      <Wrapper />
  ));