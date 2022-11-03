import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../src/components/Layout";
import TicketCreate from "../../../src/view/Ticket/TicketCreate";
import ReplyTicket from "../../../src/view/Ticket/ReplyTicket";
import { CheckAuth } from "../..";

const index = () => {
  CheckAuth();
  const router = useRouter();
  const { query } = router;

  return (
    <Layout title="Ticket System">
      {query.id === "create" && <TicketCreate />}
      {query.id !== "create" && <ReplyTicket />}
    </Layout>
  );
};

export default index;
