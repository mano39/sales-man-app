import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MainStack from "./routes/MainStack";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainStack />
    </>
  );
}

export default App;
