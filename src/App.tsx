import { useState } from "react";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { DefaultLayout } from "./_layouts/default";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <DefaultLayout>
        <Hero />
      </DefaultLayout>
    </div>
  );
}

export default App;
