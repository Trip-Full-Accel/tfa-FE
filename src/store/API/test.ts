import { CustomAxios } from "../../http/customAxios";

export const testApi = async () => {
  const { data } = await CustomAxios("/api/hello1", "GET");
  return data;
};
export const testApi2 = async () => {
  const { data } = await CustomAxios("/api/bye", "POST");
  return data;
};
