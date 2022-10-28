import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../src/components/Layout";
import ProjectPackageDetail from "../../../src/view/ProjectPackage/ProjectPackageDetail";
import ProjectPackageCreate from "../../../src/view/ProjectPackage/ProjectPackageCreate";

const index = () => {
  const router = useRouter();
  const { query } = router;
  const { id } = query;

  return (
    <Layout title="Ticket System">
      {query.id !== "detail" && <ProjectPackageCreate />}
      {query.id === "detail" && <ProjectPackageDetail />}
    </Layout>
  );
};

export default index;
