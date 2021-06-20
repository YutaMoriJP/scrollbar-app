import React from "react";
import Wrapper from "./styled";

const Button = ({ children, icon, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {children} {icon}
    </Wrapper>
  );
};

export default Button;
