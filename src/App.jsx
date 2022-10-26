import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center text-center space-y-4 pt-10">
        <section>
          <h1 className="text-3xl font-bold">
            Go to the links to start checking Rickymory information
          </h1>
        </section>
      </div>
    </main>
  );
}

export default App;
