import React from "react";
import { Outlet } from "react-router-dom";
import "./styles/Info.css";

export interface IInfoProps {}

const Info: React.FunctionComponent<IInfoProps> = (props) => {
  return (
    <div>
      <div className="Background2">
        <p className="Subheading">More Info</p>
      </div>
      <Outlet />
    </div>
  );
};

export default Info;
