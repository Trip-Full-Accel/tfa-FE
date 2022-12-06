import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
export const CustomAxios = async (url, method, body) => {
  const data = await axios({ url, method, data: body });
  return data;
};
// export default CustomAxios;
