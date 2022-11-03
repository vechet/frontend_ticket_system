import React from "react";
import Layout from "../../src/components/Layout";
import { CheckAuth } from "../../src/components/utils";
import Ticket from "../../src/view/Ticket";

const index = () => {
  CheckAuth();
  return (
    <Layout title="Ticket System">
      <Ticket />
    </Layout>
  );
};

export default index;
