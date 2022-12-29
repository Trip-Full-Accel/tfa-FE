import axios from "axios";
// 백서버 올라가면 바꿔야함
axios.defaults.baseURL = "http://backend.tripfullaccel.site:8081";
type Method = "GET" | "POST" | "PUT" | "DELETE";

export const CustomAxios = async (url: string, method: Method, body?: any) => {
  const data = await axios({ url, method, data: body });
  return data;
};
