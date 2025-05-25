import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/deshboard/Dashboard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Profile from "../pages/deshboard/Profile";
import Setting from "../pages/deshboard/Setting";

function SideMenu() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
}

export default SideMenu;
