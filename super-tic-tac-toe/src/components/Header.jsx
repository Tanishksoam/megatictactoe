import React from "react";
import { logo } from "../assets/images";

const Header = () => {
  return (
    <div className="w-full flex flex-row h-auto justify-between items-center">
      <div className="w-20 h-auto items-center">
        <img src={logo} alt="" srcSet="" />
      </div>
      <div className="w-auto font-light  text-orange-100 ">
        <p>@created by Tanishk and Divyam</p>
      </div>
    </div>
  );
};

export default Header;
