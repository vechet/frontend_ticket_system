import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { instance } from "../src/components/TicketApi";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/login");
  }, []);

  return null;
};

export default Home;
