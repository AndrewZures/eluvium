import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import { TextInput } from "../../src/library/atoms/TextInput";

storiesOf("Atoms/TextInput", module).add("with text", () => <TextInput />);
