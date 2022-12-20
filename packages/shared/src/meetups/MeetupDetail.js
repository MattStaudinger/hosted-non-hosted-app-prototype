import React from "react";

import classes from "./MeetupDetail.module.css";

export default function MeetUpDetail({ image, title, address, description }) {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
