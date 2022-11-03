import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../src/components/Layout";
import ProjectDetail from "../../../src/view/Project/ProjectDetail";
import ProjectCreate from "../../../src/view/Project/ProjectCreate";
import { CheckAuth } from "../..";

const index = () => {
  CheckAuth();
  const router = useRouter();
  const { query } = router;
  const { id } = query;

  return (
    <Layout title="Ticket System">
      {query.id !== "detail" && <ProjectCreate />}
      {query.id === "detail" && <ProjectDetail />}
    </Layout>
  );
};

export default index;
