import axios from "axios";


const tools = axios.create({
  baseURL: "http://localhost:8080",
});

export const getTools = async () => {
  const res = await tools.get("/tools");

  return res.data
};
