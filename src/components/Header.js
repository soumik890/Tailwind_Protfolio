import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="py-8">
      <div className="countainer mx-auto">
        <div
          className="flex justify-between items-center"
          // style={{ display: "flex", justifyContent: "space-between" }}
        >
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
