import Home from "./../../src/view/home/index";
import Layout from "./../../src/components/Layout/index";
import React from "react";

const Index = React.memo(() => {
  return (
    <Layout title="Home">
      <Home />
    </Layout>
  );
});

export default Index;
