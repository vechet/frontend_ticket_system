import React from "react";
import { CheckAuth } from "..";
import Layout from "../../src/components/Layout";
import TicketType from "../../src/view/TicketType";

const index = () => {
  CheckAuth();
  return (
    <Layout title="Ticket System">
      <TicketType />
    </Layout>
  );
};

export default index;
