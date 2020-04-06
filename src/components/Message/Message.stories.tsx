import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { rootDecorator } from "../../../.storybook/decorators";
import { Message, MessageType } from "../";

export default {
  title: "Message",
  component: Message,
  decorators: [withKnobs, rootDecorator]
};

export const Main = () => (
  <Message
    type={select(
      "type",
      [MessageType.ERROR, MessageType.INFO, MessageType.WARNING],
      MessageType.WARNING
    )}
    text={text("text", "Showing users for ExampleUser")}
  />
);
