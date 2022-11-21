import React from "react";
import { Outlet } from "react-router-dom";
import "./styles/NavBar.css";

export interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
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
                <a href="home">Home</a>
              </li>
              <li className="Link">
                <a href="download">Download</a>
              </li>
              <li className="Link">
                <a href="about">About</a>
              </li>
              <li className="Link">
                <a href="contact">Contact</a>
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
