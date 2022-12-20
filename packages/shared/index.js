import React from "react";

import Layout from "./src/layout/Layout";
import MeetupList from "./src/meetups/MeetupList";
import MeetupDetail from "./src/meetups/MeetupDetail";
import NewMeetupForm from "./src/meetups/NewMeetupForm";
import "./index.scss";

const buttonStyle = {
  padding: "10px 20px",
};

const Button = (props) => {
  return (
    <button
      className="btn button btn-default"
      style={buttonStyle}
      onClick={props.handleClick}
    >
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  label: "",
};

export { Button, Layout, MeetupList, MeetupDetail, NewMeetupForm };
