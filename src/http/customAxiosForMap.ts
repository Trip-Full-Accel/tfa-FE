import axios from "axios";
// axios.defaults.baseURL = "http://192.168.0.61:5001";
// axios.defaults.baseURL = "http://192.168.0.148:8081";

type Method = "GET" | "POST" | "PUT" | "DELETE";

export const CustomAxiosPy = async (
  url: string,
  method: Method,
  body?: any
) => {
  const data = await axios({
    // 백서버올라가면 바꿔야함
    url: "http://backend.tripfullaccel.site:5000" + url,
    method,
    data: body,
  });
  return data;
};
