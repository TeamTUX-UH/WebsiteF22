import React from "react";
import Download from "./Download";
import Info from "./Info";
import About from "./About";
import { Link } from "react-scroll";
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
            <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
            <button >TRAILER</button>
            </a>
            <button ><Link to="Info" spy={true} smooth={true} offset={50} duration={500}>MORE INFO</Link></button>
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
