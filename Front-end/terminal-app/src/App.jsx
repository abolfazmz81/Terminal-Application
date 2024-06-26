import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useState } from "react";
import Landing from "./pages/landing";
import Driver from "./pages/driver";
import Login from "./pages/login";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/gamedesign" element={<GameDesign />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
