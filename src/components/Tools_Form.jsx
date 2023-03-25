import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTool } from "../api/tools_api";

export function Tools_Form() {
  const queryClient = useQueryClient();

  const toolAdd = useMutation({
    mutationFn: createTool,
    onSuccess: () => {
      queryClient.invalidateQueries("tools");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formTool = new FormData(e.target);

    const tool = Object.fromEntries(formTool);

    toolAdd.mutate({
      ...tool,
      state: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
      <input
        type="text"
        id="name-tool"
        name="name"
        placeholder="description"
      />

      <label htmlFor="description">Description</label>
      <textarea
        rows={3}
        placeholder="description"
        name="description-tool"
      ></textarea>

      <label htmlFor="price">price</label>
      <input
        type="number"
        id="price-tool"
        placeholder="price"
        name="price"
      />

      <button type="submit">Save Tool</button>
    </form>
  );
}
