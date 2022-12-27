import axios from "axios";
axios.defaults.baseURL = "http://192.168.0.4:8081";

type Method = "GET" | "POST" | "PUT" | "DELETE";

export const CustomAxiosMap = async (
  url: string,
  method: Method,
  body?: any
) => {
  const data = await axios({ url, method, data: body });
  return data;
};
