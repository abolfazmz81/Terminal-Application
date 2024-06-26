import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useState } from "react";
import Landing from "./pages/landing";
import Driver from "./pages/driver";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/driver" element={<Driver />} />
          {/* <Route path="/table" element={<Table />} /> */}
          {/* <Route path="/gamedesign" element={<GameDesign />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
