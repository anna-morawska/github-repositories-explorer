import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { rootDecorator } from "../../../.storybook/decorators";
import { Input } from "../";

export default {
  title: "Input",
  component: Input,
  decorators: [withKnobs, rootDecorator]
};

export const Main = () => (
  <Input
    value=""
    onChange={() => {}}
    placeholder={text("placeholder", "Enter username")}
  />
);
