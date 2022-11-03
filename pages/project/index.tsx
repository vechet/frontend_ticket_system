import React from "react";
import { CheckAuth } from "..";
import Layout from "../../src/components/Layout";
import Project from "../../src/view/Project";

const index = () => {
  CheckAuth();
  return (
    <Layout title="Ticket System">
      <Project />
    </Layout>
  );
};

export default index;
