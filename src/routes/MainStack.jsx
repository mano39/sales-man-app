import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/deshboard/Dashboard";
import SideMenu from "./SideMenu";

function MainStack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<SideMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainStack;
