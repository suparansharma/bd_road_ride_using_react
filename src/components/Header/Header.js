import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header ">
      <nav>
          <div className="row fullRow">
          <div className="firstColum col-sm-4">BDROADRIDE </div>
        <div className="secondColum col-sm-8">
          <a className="navItem" href="/home">Home</a>
          <a className="navItem" href="/destination">Destination</a>
          <a className="navItem" href="/review">Blog</a>
          <a className="navItem" href="/contact">Contact</a>
          <a href="/login" className="navItem loginBtn">Login</a>
         
        </div>
          </div>
       
      </nav>
    </div>
  );
};

export default Header;
