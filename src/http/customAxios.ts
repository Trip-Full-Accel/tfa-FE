import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
type Method = "GET" | "POST" | "PUT" | "DELETE";

export const CustomAxios = async (url: string, method: Method, body?: any) => {
  const data = await axios({ url, method, data: body });
  return data;
};
// export default CustomAxios;
