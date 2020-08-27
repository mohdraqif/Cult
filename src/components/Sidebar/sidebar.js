import React from "react";
import white_logo from "../../assets/white logo.png";
import home from "./../../assets/home.png";
import course from "../../assets/course.png";
import rocket from "../../assets/p1.png";

import progress from "../../assets/progress.png";
import competitions from "../../assets/competitions.png";
import settings from "../../assets/settings.png";
import Logout from '../../assets/logout.png'
import n from "../../assets/n.svg";
import max from "../../assets/max.png";
import min from "../../assets/min.png";
import "./sidebar.css";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Sidebar extends React.Component {
  constructor({ history }) {
    super();

    
  }
  
  render() {
    return (
      <div>
        <div className="sidenav">
            <div className="main-element"><img src={white_logo} ></img> <div><h3>Eureka</h3><p>Learn Share and Build AI</p></div></div>
            
           <div className="element"><img src={home}  ></img> <a className="link" href="/dashboard">Home</a></div>
           <div className="element"><img src={course}  ></img> <a className="link" href="/course">Course</a></div>
           <div className="element"><img src={rocket}  ></img> <a className="link" href="/project">Project</a></div>
           <div className="element"><img src={competitions}  ></img> <a className="link" href="/competitions">Competitions</a></div>
           <div className="element"><img src={progress} ></img> <a className="link" href="/progress">Progress</a></div>
           <div className="element"><img src={settings}  ></img> <a className="link" href="/setting">Settings</a></div>
           <div className="logout-btn"><img src={Logout}  ></img> <a className="link" href="/logout">Logout</a></div>
        
        </div>
      </div>
    );
  }
}
export default withRouter(Sidebar);