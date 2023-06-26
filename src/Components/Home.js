import { React } from "react";
import "./Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";


function Home() {
  return (
    <div className="home" id="home">
      <p className="gif" align="center">
          <img className="header-bar-gif"
            
            alt="Animated footer bars"
          />
      </p>

      <div className="home-data">
        <h1 className="home-title">
          Hey!&nbsp;&nbsp;
          <img
            src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
            alt=""
            width="50px"
          ></img>
          <br />
          I'm <span>Ahmad Olagunju</span>
          <br />
          A Software Developer
        </h1>
          <div className="box box2"></div>
      </div>

      <div className="home-social">
        <a
          href="https://www.linkedin.com/in/ahmad-olagunju/"
          className="home-social-icon"
        >
          <LinkedInIcon className="icon" />
        </a>
        
        <a href="https://github.com/AhmadOlagunju" className="home-social-icon">
          <GitHubIcon className="icon" />
        </a>
       
      </div>
    </div>
  );
}

export default Home;
