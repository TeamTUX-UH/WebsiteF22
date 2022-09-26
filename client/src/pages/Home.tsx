import React from "react";
import tux from "../components/tux.png";
import "./styles/Home.css";

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div>
      <div className="Home">
        <h1>Team TUX Project Website!</h1>
        <img src={tux} alt="Team TUX Logo" />
      </div>
    </div>
  );
};

export default Home;
