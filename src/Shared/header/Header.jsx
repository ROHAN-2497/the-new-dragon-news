import React from "react";
import logo from "../../assets/logo.png";
import moment from 'moment';
const Header = () => {
  return (
    <div>
      <div className="text-center">
        {" "}
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>{moment().format("dddd, MMMM D, YYYY")}</small>
        </p>
      </div>
    </div>
  );
};

export default Header;
