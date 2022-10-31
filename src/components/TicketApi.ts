import axios from "axios";
import { baseUrl } from "./utils";

export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
  },
  withCredentials: true,
});
