import React from "react";
import "./styles/NavBar.css";

export interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return (
    <div>
      <div className="NavBar">
        <ul className="Links">
          <li>
            <span className="Title">CYBERTUX</span>
          </li>
          <li className="Link">Contact</li>
          <li className="Link">About</li>
          <li className="Link">Download</li>
          <li className="Link">
            <a href="home">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
