import React from "react";
import Link from "next/link";

import "../styles/globals.css";
import { Layout } from "shared";

const LinkWrapper = (props) => {
  return React.cloneElement(<Link />, {
    ...props,
    to: props.href,
  });
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout LinkComponent={LinkWrapper}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
