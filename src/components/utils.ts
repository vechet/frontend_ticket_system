import { useRouter } from "next/router";
import { useEffect } from "react";

export const baseUrl = "http://localhost:21345/api/v1/";

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const CheckAuth = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      router.replace("/auth");
    }
  }, []);
};
