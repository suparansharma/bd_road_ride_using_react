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
          <Link className="navItem" to="/home">Home</Link>
          <Link className="navItem" to="/destination">Destination</Link>
          <Link className="navItem" to="/review">Blog</Link>
          <Link className="navItem" to="/contact">Contact</Link>
          <Link to="/login" className="navItem loginBtn">Login</Link>
         
        </div>
          </div>
       
      </nav>
    </div>
  );
};

export default Header;
