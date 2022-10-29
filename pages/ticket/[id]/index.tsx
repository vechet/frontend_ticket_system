import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../src/components/Layout";
import TicketCreate from "../../../src/view/Ticket/TicketCreate";
import TicketDetail from "../../../src/view/Ticket/TicketDetail";

const index = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <Layout title="Ticket System">
      {query.id === "create" && <TicketCreate />}
      {query.id !== "create" && <TicketDetail />}
    </Layout>
  );
};

export default index;
