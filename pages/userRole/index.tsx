import React from "react";
import { CheckAuth } from "../../src/components/utils";
import Layout from "../../src/components/Layout";
import UserRole from "../../src/view/UserRole";

const index = () => {
  CheckAuth();

  return (
    <Layout title="Ticket System">
      <UserRole />
    </Layout>
  );
};

export default index;
