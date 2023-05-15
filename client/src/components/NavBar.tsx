import React from "react";
import { Link } from "react-scroll";
import { Outlet } from "react-router-dom";
import "./styles/NavBar.css";


const NavBar= () => {
  return (
    <div>
      <div className="NavBar">
        <ul className="Table">
          <li>
            <span className="Title">CYBERTUX</span>
          </li>
          <li className="Links">
            <ul>
              <li className="Link">
                <a>Home</a>
              </li>
              <li className="Link">
                <a>Download</a>
              </li>
              <li className="Link">
                <a >About</a>
              </li>
              <li className="Link">
                <a >Contact</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
