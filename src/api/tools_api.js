import axios from "axios";

const tools = axios.create({
  baseURL: "https://server-gray-ten.vercel.app/api/tools",
});

export const getTools = async () => {
  const res = await tools.get("/");

  return res.data;
};

export const createTool = async (tool) => await tools.post("/", tool);

export const deleteTool = async (id) => await tools.delete(`/${id}`);

export const updateTool = async (tool) => tools.put(`/${tool.id}`, tool);
