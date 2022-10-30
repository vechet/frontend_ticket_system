import axios from "axios";
import { baseUrl } from "./utils";

export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmVjaGV0IiwibmJmIjoxNjY3MTU5Mjc0LCJleHAiOjE2NjcyNDU2NzQsImlhdCI6MTY2NzE1OTI3NH0.UHHvdF9TsaPOQ7u7v1X6U6O0s-lzw31hypkC_r2DmJs",
  },
  withCredentials: true,
});
