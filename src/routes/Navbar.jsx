import React from "react";

function Navbar() {
  return (
    <div className=" h-16 bg-slate-200 text-black p-1 flex ">
      <div>
        <h1>Deshaboard</h1>
      </div>
      <div>
        <input type="text" />
        <i class="fa-solid fa-border-all"></i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-user"></i>
      </div>
    </div>
  );
}

export default Navbar;
