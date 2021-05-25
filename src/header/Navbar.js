import React from "react";
import { Link, withRouter } from "react-router-dom";
import Search from "./Search";
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/"><img className="logoimg" src={logo} alt="Video Library"/></Link>
      </div>
      <div className="search-bar">
        <Search />
      </div>
      <div style={{ clear: "both" }} />
    </nav>
  );
};

export default withRouter(Navbar);
