import React from "react";
import "./styles/Info.css";

export interface IDownloadProps {}

// function downloadExe() {
//   window.location.href="./src/assets/game"
// };

const Download: React.FunctionComponent<IDownloadProps> = (props) => {
  return (
    <div>
      <div className="Background2">
        <p className="Subheading">Download</p>
        <p className="Description">Available on: <br/></p>   
        <a href="https://github.com/TeamTUX-UH/WebsiteF22">
          <button>
            INSTALL
          </button>
        </a>
      </div>
    </div>
  );
};

export default Download;
