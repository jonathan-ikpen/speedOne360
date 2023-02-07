// import React from "react";
import { useState, useEffect } from "react";
import "../../index.css";
import { LoginBtn } from "../Buttons/buttons";
import logo from "../../assets/logo.png";

const Header = ({ showLogin }) => {
  const [activeBtn, setActiveBtn] = useState(showLogin);
  return (
    <header className="fixed w-full top-0 left-0 z-50 flex bg-header backdrop-blur-[24px] text-opacity-100 opacity-100">
      <div className="relative flex justify-between top-0 py-2 px-5 my-0 mx-auto w-full">
        <div className="">
          <a className="" href="/">
            <img
              className="max-w-full align-middle stroke-2"
              src={logo}
              alt=""
              width="120px"
            />
          </a>
        </div>
        <div className="flex items-center">
          {activeBtn ? <LoginBtn name="set up" url="/register" /> : ""}
        </div>
      </div>
    </header>
  );
};

export default Header;
