import React from "react";
import { CheckAuth } from "../../src/components/utils";
import Layout from "../../src/components/Layout";
import ProjectPackage from "../../src/view/ProjectPackage";

const index = () => {
  CheckAuth();
  return (
    <Layout title="Ticket System">
      <ProjectPackage />
    </Layout>
  );
};

export default index;
