import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className=" absolute top-16 left-64">
      <button onClick={() => navigate("/profile")}>button</button>
    </div>
  );
}

export default Dashboard;
