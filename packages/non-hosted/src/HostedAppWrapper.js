import React from "react";
import { useNavigate } from "react-router-dom";
import { navigate } from "./utils";
import { DUMMY_MEETUPS } from "./constants";

const HostedAppWrapper = ({ children, endpoint }) => {
  const router = useNavigate();

  console.log(
    "Fetch API with the endpoint will be called here if an endpoint is provided in a real app: ",
    endpoint
  );
  const meetups = DUMMY_MEETUPS;

  return React.cloneElement(children, {
    // ...children.props,
    navigate: (url) => {
      navigate({ router, url });
    },
    meetups,
  });
};

export default HostedAppWrapper;
