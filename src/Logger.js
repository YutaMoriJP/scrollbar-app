import React from "react";

const Logger = (props) => {
  React.useLayoutEffect(() => {
    console.log(`${props.name} commits`);
  });
  console.log(`${props.name} renders`);
  return null;
};

export default Logger;
