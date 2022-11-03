import Home from "./../../src/view/home/index";
import Layout from "./../../src/components/Layout/index";
import React from "react";
import { CheckAuth } from "..";

const Index = React.memo(() => {
  CheckAuth();

  return (
    <Layout title="Ticket System">
      <Home />
    </Layout>
  );
});

export default Index;
