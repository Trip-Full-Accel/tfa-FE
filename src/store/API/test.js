import { CustomAxios } from "./../../http/customAxios";
export const testApi = async () => {
  const { data } = await CustomAxios("/api/hello1", "get");
  return data;
};
