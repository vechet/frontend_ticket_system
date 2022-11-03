import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../src/components/Layout";
import TicketTypeDetail from "../../../src/view/TicketType/TicketTypeDetail";
import TicketTypeCreate from "../../../src/view/TicketType/TicketTypeCreate";
import { CheckAuth } from "../..";

const index = () => {
  CheckAuth();
  const router = useRouter();
  const { query } = router;
  const { id } = query;

  return (
    <Layout title="Ticket System">
      {query.id !== "detail" && <TicketTypeCreate />}
      {query.id === "detail" && <TicketTypeDetail />}
    </Layout>
  );
};

export default index;
