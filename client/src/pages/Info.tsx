import React from "react";
import { Outlet } from "react-router-dom";
import "./styles/Info.css";

export interface IInfoProps {}

const Info: React.FunctionComponent<IInfoProps> = (props) => {
  return (
    <div>
      <div className="Background2" id="Info">
        <p className="Subheading">More Info/Future plans</p>
        <div className="Description">We all enjoyed our time working on the game and hope to add many more elements and aspects to the game.</div>
        <div className="Description">Future patch notes or Roadmap for the game.</div>
        <br></br>
        <div className="patches"> Home Screen</div>
        <div className="patches"> Win/Lose Screen</div>
        <div className="patches"> Redo Option</div>
        <div className="patches"> In game music</div>
        <div className="patches"> Making the game an .EXE so you can download it straight from the site</div>
        <div className="patches"> MORE CIPHERS!</div>
      </div>
      <Outlet />
    </div>
  );
};

export default Info;
