import axios from "axios";
import { baseUrl } from "./utils";

export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdDEiLCJuYmYiOjE2NjcxMDAwMjcsImV4cCI6MTY2NzE4NjQyNywiaWF0IjoxNjY3MTAwMDI3fQ.67mDUFDLbrV3gtv6recpckBIOKkpFxuQAqTrjq5soDs",
  },
  withCredentials: true,
});
