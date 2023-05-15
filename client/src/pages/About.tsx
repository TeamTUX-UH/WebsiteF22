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
          <div className="container">
            <img className="imageTux" src="/teamtux.webp" alt="teamtux" />
            <div className="description">
            <p className="teamDescription">Hi there! We are a group of students who recently completed a semester-long project together called CipherGen. Our goal was to create an engaging decrypting game that would challenge and entertain players while also providing them with an opportunity to improve their coding skills. Over the course of several months, we worked closely together to design, develop, and refine every aspect of the game, from the interface to the algorithms used to generate the ciphers. Despite some bumps in the road along the way, we are incredibly proud of what we have accomplished and are excited to share CipherGen with the world. We hope you enjoy playing it as much as we enjoyed creating it!</p>
            </div>
          </div>
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
              <li>Hieu - Game Developer</li>
              <li>Ashish - Game Developer</li>
              <li>Malik - Game Developer</li>
              <li>Timothy - Game Developer</li>
              <li>Austin - Game Developer</li>
              <li>Aaron - Game Developer</li>
              <li>Chinedu - Game Developer</li>
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
              <li>Mason - Programmer</li>
            </ul>
          </div>
          <div className="GroupPosition">
            <ul className="MemberList">
              <li>Pierreje - AI/Machine learning</li>
              <li>Michael - AI/Machine learning</li>
              <li>Daniel - AI/Machine learning</li>
              <li>Fatima - AI/Machine learning</li>
              <li>My Tran - AI/Machine learning</li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default About;
