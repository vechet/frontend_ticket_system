import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../src/components/Layout";
import UserRoleDetail from "../../../src/view/UserRole/UserRoleDetail";
import UserRoleCreate from "../../../src/view/UserRole/UserRoleCreate";

const index = () => {
  const router = useRouter();
  const { query } = router;
  const { id } = query;

  return (
    <Layout title="Ticket System">
      {query.id !== "detail" && <UserRoleCreate />}
      {query.id === "detail" && <UserRoleDetail />}
    </Layout>
  );
};

export default index;
