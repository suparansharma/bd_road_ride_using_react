import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header ">
      <nav>
          <div className="row fullRow">
          <div className="firstColum col-sm-4">BDROADRIDE</div>
        <div className="secondColum col-sm-8">
          <a className="navItem" to="/shop">Home</a>
          <a className="navItem" to="/shop">Destination</a>
          <a className="navItem" to="/review">Blog</a>
          <a className="navItem" to="/inventor">Contact</a>
          <button className="navItem loginBtn">Login</button>
        </div>
          </div>
       
      </nav>
    </div>
  );
};

export default Header;
