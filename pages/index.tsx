import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      router.replace("/ticket");
    } else {
      router.replace("/auth");
    }
  }, []);

  return null;
};

export default Home;
