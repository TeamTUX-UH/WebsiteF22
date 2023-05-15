import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

export interface IAppProps {}

const Application: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
