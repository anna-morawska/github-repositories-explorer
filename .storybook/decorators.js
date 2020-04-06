import React from "react";
import "../src/styles/main.scss";

const styles = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
};

const darkBgStyles = {
  backgroundColor: "#2c9cdb",
};

const rootDecorator = (storyFn) => <div style={styles}>{storyFn()}</div>;
const darkBgDecorator = (storyFn) => (
  <div style={darkBgStyles}>{storyFn()}</div>
);

export { rootDecorator, darkBgDecorator };
