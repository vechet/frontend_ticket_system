import React from "react";
import Head from "next/head";
import SideBar from "./SideBar";

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
      <SideBar />
      <div style={{ marginLeft: "292px", padding: "40px 80px 140px" }}>
        {children}
      </div>
    </>
  );
});

export default Layout;
