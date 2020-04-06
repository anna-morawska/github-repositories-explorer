import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { rootDecorator } from "../../../.storybook/decorators";
import { Dropdown, Card } from "../";

export default {
  title: "Dropdown",
  component: Dropdown,
  decorators: [withKnobs, rootDecorator]
};

export const Main = () => (
  <Dropdown
    isOpen={boolean("isOpen", false)}
    title={text("title", "Exampleuser1")}
  >
    <Card
      title="Repository title"
      description="Repository description"
      stars={27}
    />
    <Card
      title="Repository title"
      description="Repository description"
      stars={27}
    />
    <Card
      title="Repository title"
      description="Repository description"
      stars={27}
    />
  </Dropdown>
);
