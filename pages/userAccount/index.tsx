import React from "react";
import { CheckAuth } from "../../src/components/utils";
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
