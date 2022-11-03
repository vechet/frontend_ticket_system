import React from "react";
import { CheckAuth } from "..";
import Layout from "../../src/components/Layout";
import UserAccount from "../../src/view/UserAccount";

const index = () => {
  CheckAuth();

  return (
    <Layout title="Ticket System">
      <UserAccount />
    </Layout>
  );
};

export default index;
