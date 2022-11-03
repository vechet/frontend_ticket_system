import { useRouter } from "next/router";
import React from "react";
import { CheckAuth } from "../..";
import Layout from "../../../src/components/Layout";
import ProjectTypeCreate from "../../../src/view/ProjectType/ProjectTypeCreate";
import ProjectTypeDetail from "../../../src/view/ProjectType/ProjectTypeDetail";
const index = () => {
  CheckAuth();
  const router = useRouter();
  const { query } = router;
  const { id } = query;

  return (
    <Layout title="Ticket System">
      {query.id !== "detail" && <ProjectTypeCreate />}
      {query.id === "detail" && <ProjectTypeDetail />}
    </Layout>
  );
};

export default index;
