import React from "react";
import { CheckAuth } from "..";
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
