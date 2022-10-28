import { useRouter } from "next/router";
import React from "react";

const ProjectCreate = React.memo(() => {
  const router = useRouter();
  const { query } = router;
  const isCreate = query.id === "create";
  return <div>{isCreate ? "Create" : "Edit"}</div>;
});

export default ProjectCreate;
