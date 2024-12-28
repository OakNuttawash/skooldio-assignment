import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  function handleCountUpdate() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <main>
        <h1>Counter</h1>
        <p>{count}</p>
        <Button onClick={handleCountUpdate}>Increment</Button>
      </main>
    </>
  );
}

export default App;
