import { useState } from "react";
import Navbar from "./assets/Navbar";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
