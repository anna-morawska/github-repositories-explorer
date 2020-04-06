import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { rootDecorator } from "../../../.storybook/decorators";
import { Button } from "../";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs, rootDecorator]
};

export const Main = () => (
  <Button
    onClick={action("clicked")}
    disabled={boolean("disabled", false)}
    loading={boolean("loading", false)}
  >
    {text("text", "Search")}
  </Button>
);
