import { useQuery } from "@tanstack/react-query";
import api from "./common/api/client";
import { ApiResponse } from "./common/api/types";
import Card from "./components/card";

function getInfo() {
  return api.get<ApiResponse[]>("").then((res) => res.data);
}

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getInfo,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <main className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 min-h-screen items-center justify-center p-24 gap-5">
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </main>
  );
}

export default App;
