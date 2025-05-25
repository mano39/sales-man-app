import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-row-reverse bg-slate-100">
      <div className=" w-[80vw] h-16  text-black p-1 flex items-center justify-between px-2">
        <div className="flex items-center">
          <span className="bg-slate-50 p-5 rounded-full w-6 h-6 flex items-center justify-center mr-2">
            <i class="fa-solid fa-ellipsis-vertical "></i>
          </span>
          <h1>Deshaboard</h1>
        </div>
        <div className="flex items-center ">
          <input
            type="text"
            className=" outline-none border-none p-1 bg-transparent border-b-2   border-b-black"
            placeholder="Search ..."
          />
          <span className="bg-slate-50 p-5 rounded-full w-6 h-6 flex items-center justify-center mr-6">
            <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
          </span>
          <i class="fa-solid fa-border-all text-gray-600 mr-5 font-bold text-xl"></i>
          <i class="fa-solid fa-bell text-gray-600 mr-5 font-bold text-xl"></i>
          <i class="fa-solid fa-user text-gray-600 mr-5 font-bold text-xl"></i>
        </div>
      </div>
      <div className="w-64 bg-rose-500 text-white h-screen p-4 ">
        <div className="flex items-center my-2 border-b border-gray-300 pb-4 ">
          <img
            src="https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png"
            className="w-12 h-12 mr-2"
            alt="logo"
            srcset=""
          />
          <h1 className=" text-2xl">CREATIVE TIM</h1>
        </div>
        {/*  */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <span className="flex items-center">
            <img
              src="https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/faces/avatar.jpg"
              className="w-12 h-12 rounded-full mr-2"
              alt="logo"
              srcset=""
            />
            <h1 className=" text-base">Navttc</h1>
          </span>
          <i class="fa-solid fa-caret-down mr-3"></i>
        </div>
        <div className="flex items-center border-b border-gray-300 p-4 cursor-pointer">
          <i class="fa-solid fa-list-ul mr-2"></i>
          <h1 className=" text-base">Deshboard</h1>
        </div>
        <div className="flex items-center border-b border-gray-300 p-4 cursor-pointer">
          <i class="fa-solid fa-list-ul mr-2"></i>
          <h1 className=" text-base">Deshboard</h1>
        </div>
        <div className="flex items-center border-b border-gray-300 p-4 cursor-pointer">
          <i class="fa-solid fa-list-ul mr-2"></i>
          <h1 className=" text-base">Deshboard</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
