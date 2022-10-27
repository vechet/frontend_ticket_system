import React from "react";
import Head from "next/head";
import Header from "./Header";

interface IProps {
  children: any;
  title: string;
}

const Layout = React.memo(({ children, title }: IProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
    </>
  );
});

export default Layout;
