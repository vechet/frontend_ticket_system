export const baseUrl = "http://localhost:21345/api/v1/";

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
