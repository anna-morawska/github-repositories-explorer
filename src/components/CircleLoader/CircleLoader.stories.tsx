import React from "react";
import { rootDecorator, darkBgDecorator } from "../../../.storybook/decorators";

import { CircleLoader } from "./CircleLoader";

export default {
  title: "CircleLoader",
  decorators: [rootDecorator, darkBgDecorator]
};

export const Main = () => {
  return <CircleLoader />;
};
