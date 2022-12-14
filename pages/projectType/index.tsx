import React from "react";
import { CheckAuth } from "../../src/components/utils";
import Layout from "../../src/components/Layout";
import ProjectType from "../../src/view/ProjectType";

const index = () => {
  CheckAuth();
  return (
    <Layout title="Ticket System">
      <ProjectType />
    </Layout>
  );
};

export default index;
