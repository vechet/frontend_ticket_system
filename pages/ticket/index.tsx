import React from "react";
import { CheckAuth } from "..";
import Layout from "../../src/components/Layout";
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
