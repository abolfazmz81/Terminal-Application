import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useState } from "react";
import Landing from "./pages/landing";
import Driver from "./pages/driver";
import Login from "./pages/login";
import Admin_panel from "./pages/admin_panel";
import Admin_car from "./pages/admin_car";
import Add_car from "./pages/add_car";
import Add_Driver from "./pages/add_driver";
import Admin_report from "./pages/Admin_report";
import Admin_travel from "./pages/admin_travel";
import Add_travel from "./pages/Add_travel";
import Contact_us from "./pages/contact_us";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/admin_panel" element={<Admin_panel />} />
          <Route path="/admin_car" element={<Admin_car />} />
          <Route path="/add_car" element={<Add_car />} />
          <Route path="/add_driver" element={<Add_Driver />} />
          <Route path="/admin_report" element={<Admin_report />} />
          <Route path="/admin_travel" element={<Admin_travel />} />
          <Route path="/add_travel" element={<Add_travel />} />
          <Route path="/contact_us" element={<Contact_us />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
