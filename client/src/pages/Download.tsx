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
          <div className="Description">How to install and run the game</div>
        </a>
      </div>
    </div>
  );
};

export default Download;
