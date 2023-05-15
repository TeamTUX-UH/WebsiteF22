import React from "react";
import "./styles/Info.css";

export interface IDownloadProps {}

// function downloadExe() {
//   window.location.href="./src/assets/game"
// };

const Download: React.FunctionComponent<IDownloadProps> = (props) => {
  return (
    <div>
      <div className="Background2" id="Download">
        <p className="Subheading">Download</p>
        <p className="Description">Available on: 
        <a className="on-Description"> Windows and Mac</a>
     </p>   
        <a href="https://github.com/Alexander-B-Coding/CipherGen">
          <button className="install-button">
            INSTALL
          </button>
          </a>
          <div className="Description">How to install and run the game</div>
          <br></br>
          <div>First go to the github repository and clone it to visual studio code.</div>
          <div>Second if not already get pip and pygame.</div>
          <div>Lastly go to the terminal and run the command "py .\game.py".</div>
      </div>
    </div>
  );
};

export default Download;
