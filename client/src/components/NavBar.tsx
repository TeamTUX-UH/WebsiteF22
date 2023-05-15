import React from "react";
import { Link } from "react-scroll";
import { Outlet } from "react-router-dom";
import "./styles/NavBar.css";


const NavBar= () => {

  const nothing = ()=>{
    return;
  }
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
                <Link to="/" spy={true} smooth={true} offset={50} duration={500} onClick={nothing}>Home</Link>
              </li>
              <li className="Link">
                <Link to="Download" spy={true} smooth={true} offset={50} duration={500}>Download</Link>
              </li>
              <li className="Link">
                <Link to="About" spy={true} smooth={true} offset={50} duration={500} >About</Link>
              </li>
              <li className="Link">
                <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} >Contact</Link>
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
