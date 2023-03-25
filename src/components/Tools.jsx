import { useQuery } from "@tanstack/react-query";
import { getTools } from "../api/tools_api";

export function Tools() {
  const query = useQuery({
    queryKey: ["tools"],
    queryFn: getTools,
  });

  if (query.isLoading) return <h2>loading...</h2>;
  else if (query.isError) return <h2>{query.error.message}</h2>;

  return (
    <div>
      {query.data.map((tool) => (
        <div key={tool.id}>
          <h3>{tool.name}</h3>
          <p> {tool.description} </p>
          <p>{tool.price}</p>
          <button>delete</button>
          <input type="checkbox" />
          <label>Done</label>
        </div>
      ))}
    </div>
  );
}
