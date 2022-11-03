import { useRouter } from "next/router";
import React from "react";
import { CheckAuth } from "../..";
import Layout from "../../../src/components/Layout";
import UserAccountCreate from "../../../src/view/UserAccount/UserAccountCreate";
import UserAccountDetail from "../../../src/view/UserAccount/UserAccountDetail";

const index = () => {
  CheckAuth();
  const router = useRouter();
  const { query } = router;
  const { id } = query;

  return (
    <Layout title="Ticket System">
      {query.id !== "detail" && <UserAccountCreate />}
      {query.id === "detail" && <UserAccountDetail />}
    </Layout>
  );
};

export default index;
