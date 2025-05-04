import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const loginAdmin = () => {
    console.log("object");

    navigate("/dashboard");
  };

  return (
    <div className="loginContainer flex items-center  flex-col">
      <div className="flex justify-evenly items-center  py-4 w-full">
        <h5 className="text-lg ">Material Dashboard Pro Angular</h5>
        <div className="flex justify-around w-1/5">
          <a className="text-md" href="">
            Dashboard
          </a>
          <a className="text-sm " href="">
            Login
          </a>
          <a className="text-sm" href="">
            Blog
          </a>
          <a className="text-sm" href="">
            About us
          </a>
          <a className="text-sm" href="">
            Service
          </a>
        </div>
      </div>
      <div className="w-4/6 bg-slate-50 mt-10 p-6 rounded-md h-full mb-20 flex justify-center items-center flex-col">
        <h1 className="text-center">Admin Login</h1>

        <div className=" flex justify-between">
          <div className=" w-1/2">
            <Text
              title={"Marketing"}
              text="We've created the marketing campaign of the website. It was a very interesting collaboration."
              icon="fa-solid fa-ranking-star"
              color={"#E91E63"}
            />
            <Text
              icon="fa-solid fa-code"
              title={"Fully Coded in HTML5"}
              text="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
              color={"#9c27b0"}
            />
            <Text
              icon="fa-solid fa-users"
              title={"Built Audience"}
              text="There is also a Fully Customizable CMS Admin Dashboard for this product."
              color={"#00BCD4"}
            />
          </div>
          <div className=" w-1/2 text-center flex justify-center  flex-col ">
            <h1 className="mb-10">or be classical</h1>

            <div className="flex flex-col justify-center items-center">
              <input
                type="email"
                placeholder="Email ...."
                className=" w-3/5 bg-none border-none border-b border-gray outline-none bg-transparent p-2 text-sm "
              />
              <input
                type="password"
                placeholder="password ...."
                className=" w-3/5 bg-none border-none border-b-2 border-slate-400 outline-none bg-transparent p-2 text-sm"
              />
            </div>
            <button
              onClick={loginAdmin}
              className="rounded-full self-center text-white bg-[#9c27b0] w-20 p-[2px] mt-10"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Text = ({ title, text, icon, color }) => {
  return (
    <div className="flex my-6">
      <i className={`${icon} mr-2 text-[${color}]`}></i>

      <div>
        <h2>{title}</h2>
        <p className="text-slate-500 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Login;
