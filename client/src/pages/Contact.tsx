import React from "react";
import Download from "./Download";
import Info from "./Info";

import "./styles/Contact.css";

export interface IContactProps {}


const Contact: React.FunctionComponent<IContactProps> = (props) => {
  return (
    <div className="ContactContainer">
      <h1 className="ContactHeader">Contact Us</h1>
      <div className="ContactInputContainer">
        <input placeholder="First Name"></input>
        <input placeholder="Last Name"></input>
      </div>
      <div className="ContactInputContainer">
        <input placeholder="Subject"></input>
        <input placeholder="Email"></input>
      </div>
      <textarea placeholder="Message"></textarea>
      <button className="SubmitForm">SUBMIT</button>
    </div>
  );
};

export default Contact;
