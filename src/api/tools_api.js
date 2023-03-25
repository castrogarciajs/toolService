import axios from "axios";

const tools = axios.create({
  baseURL: "http://localhost:8080/tools",
});

export const getTools = async () => {
  const res = await tools.get("/");

  return res.data;
};

export const createTool = async (tool) => await tools.post("/", tool);

export const deleteTool = async (id) => await tools.delete(`/${id}`)