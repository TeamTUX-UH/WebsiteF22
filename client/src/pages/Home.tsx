import React from "react";
import { Outlet } from "react-router-dom";
import tux from "../components/tux.png";
import "./styles/Home.css";

export interface IHomeProps {}

const TestHome: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div>
      <div className="Home">
        <h1>Team TUX Project Website!</h1>
        <img src={tux} alt="Team TUX Logo" />
      </div>
    </div>
  );
};

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div>
      <div className="Background"></div>
      <Outlet />
    </div>
  );
};

export default Home;
