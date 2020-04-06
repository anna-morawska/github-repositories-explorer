import React from "react";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import { rootDecorator } from "../../../.storybook/decorators";
import { Card } from "../";

export default {
  title: "Card",
  component: Card,
  decorators: [withKnobs, rootDecorator]
};

export const Main = () => (
  <Card
    title={text("title", "Repository title")}
    description={text("description", "Repository description")}
    stars={number("stars", 27)}
  />
);
