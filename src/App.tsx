import { useQuery } from "@tanstack/react-query";
import api from "./common/api/client";
import { ApiResponse } from "./common/api/types";
import Card from "./components/card";

function getInfo() {
  return api.get<ApiResponse>("").then((res) => res.data);
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
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card />
    </main>
  );
}

export default App;
