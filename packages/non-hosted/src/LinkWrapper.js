import React from "react";
import { Link } from "react-router-dom";

const LinkWrapper = (props) => {
  return React.cloneElement(<Link />, {
    ...props,
    to: props.href,
  });
};

export default LinkWrapper;
