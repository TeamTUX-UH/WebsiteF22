import React from "react";
import Download from "./Download";
import Info from "./Info";
import About from "./About";
// import tux from "../components/tux.png";
import "./styles/Home.css";
import Contact from "./Contact";

export interface IHomeProps {}

// const TestHome: React.FunctionComponent<IHomeProps> = (props) => {
//   return (
//     <div>
//       <div className="Home">
//         <h1>Team TUX Project Website!</h1>
//         <img src={tux} alt="Team TUX Logo" />
//       </div>
//     </div>
//   );
// };

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div>
      <div className="Background">
        <ul className="GameInfo">
          <li>
            <p className="GameName">CipherGen</p>
            <p className="Subheading">Currently avaliable</p>
            <p className="Description">
              Short description about game ... lorem ipsum <br />
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <button>TRAILER</button>
            <button>MORE INFO</button>
          </li>
        </ul>
      </div>
      <hr />
      <Info />
      <hr />
      <Download />
      <hr />
      <About />
      <hr />
      <Contact />
    </div>
  );
};

export default Home;
