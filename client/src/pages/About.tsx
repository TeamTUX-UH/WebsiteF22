import React from "react";
import { Outlet } from "react-router-dom";
import "./styles/About.css"

export interface IInfoProps {}

const About: React.FunctionComponent<IInfoProps> = (props) => {
  return (
    <div>
      <div className="Background2">
        <div>
          <p className="SubHeading2">About</p><p className="TeamName">CyberTux</p>
          <p className="Description">Hi there! We are a group of students who recently completed a semester-long project together called CipherGen. Our goal was to create an engaging decrypting game that would challenge and entertain players while also providing them with an opportunity to improve their coding skills. Over the course of several months, we worked closely together to design, develop, and refine every aspect of the game, from the interface to the algorithms used to generate the ciphers. Despite some bumps in the road along the way, we are incredibly proud of what we have accomplished and are excited to share CipherGen with the world. We hope you enjoy playing it as much as we enjoyed creating it!</p>
          <p className="Subheading">Meet the Team!</p>
          <div className="GroupPosition">
            <ul className="MemberList">
              <li>Ben - Team Lead</li>
              <li>Frosty - Team Lead</li>
              <li>Jaden - Team Lead</li>
            </ul>
          </div>
          <div className="GroupPosition">
            <ul className="MemberList">
              <li>Chelsea - Designer</li>
            </ul>
          </div>
          <div className="GroupPosition">
            <ul className="MemberList">
              <li>Michelle - Programmer</li>
              <li>John - Programmer</li>
              <li>Carolyn - Programmer</li>
              <li>Alex - Programmer</li>
              <li>Andrew - Programmer</li>
              <li>Jordan - Programmer</li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default About;

/*
Ben - Team Lead
Frosty - Team Lead
Jaden - Team Lead
Chelsea - Member/Designer
Michelle - Member/Programmer
John - Member/Programmer 
Carolyn - Member/Programmer
Alex - Member/Programmer 
Andrew - Member/Programmer 
Jordan - Member/Programmer 
*/
