import React from 'react';
import Home from './../../assets/6.png'
import {

  MDBBtn,

} from 'mdbreact';
import './dashboard.css';

import Sidebar from './../Sidebar/sidebar'

class ParallaxIntro extends React.Component {
  constructor(props){
    super(props);
    this.state={
       
    }

  }


  handleLogout(){
    this.props.history.push('/logout')
  }

  render() {
    return (
      <div className="div">
        {/* <Sidebar/> */}
        <div className="welcome">
          <h3>Welcome to Eureka DashBoard</h3>
          <p>Exciting New things are on the way. Stay Tuned with Eureka.</p>
        </div>
        <div className="dash">
          <img src={Home} alt="" />
          <MDBBtn color="primary"
          onClick={()=>this.handleLogout()}
          style={{
            top:0,
            right:0,}}
          >Logout</MDBBtn>
        </div>
      </div>
    );
  }
}

export default ParallaxIntro;