import React, { Component } from 'react';
import './Project.css'
import Sidebar from './../Sidebar/sidebar'

export default class Projects extends Component {
  state = {
    projects: [
      {id: 1, name: 'UK Newspaper Headlines', text: 'Text', msg: 'Daily_mail, Daily.Telegraph or 2 other classes'},
      {id: 2, name: 'UK Newspaper Headlines', text: 'Text', msg: 'Daily_mail, Daily.Telegraph or 2 other classes'},
      {id: 3, name: 'UK Newspaper Headlines', text: 'Text', msg: 'Daily_mail, Daily.Telegraph or 2 other classes'},
      {id: 4, name: 'UK Newspaper Headlines', text: 'Text', msg: 'Daily_mail, Daily.Telegraph or 2 other classes'}
    ]
  }

  render() {
    return (
       <div>
        <Sidebar/>  
        <div className="projects-div">
          <div className="projects-img">
            <img src={require('../../assets/2.png')} alt=""  />
            <h1>Projects</h1>
            <div className="buttons">
              <button title="Copy template"><a href="/copyproject" style={{color:"white"}}><i class="fa fa-clone" aria-hidden="true"></i></a></button>
              <button title="Create Project"><a href="/createproject" style={{color:"white"}}><i class="fa fa-plus" aria-hidden="true"></i></a></button>
            </div>
          </div>
          <div className="projectlist"> 
          {this.state.projects.map((pro) => {
            return (
              <a href="/model-page"><div className="project">
                <h2>{pro.name}</h2>
                <div className="msg">
                  <p className="text">{pro.text}</p><p className="text">{pro.msg}</p>
                  <div classname="end-buttons" style={{display:"flex",flexFlow:"column",marginLeft:"100px"}}>
                    <button style={{  backgroundColor:"rgb(23, 152, 211)", /* Green */
                                      border: "none",
                                          color: "white",
                                          padding: "15px 32px",
                                          textAlign: "center",
                                          textDecoration: "none",
                                          display: "inline-block",
                                          fontSize: "16px",
                                          borderRadius:"0.3rem"}}>Share</button>
                      <button
                      style={{  backgroundColor:"rgb(23, 152, 211)", /* Green */
                      border: "none",
                          color: "white",
                          padding: "15px 32px",
                          textAlign: "center",
                          textDecoration: "none",
                          display: "inline-block",
                          fontSize: "16px",
                        marginTop:"0.3em",
                      borderRadius:"0.3rem"}}
                      >Delete</button>
                  </div>
                </div> 
              </div></a>
            )
          })}
          </div>
        </div>
      </div>
    );
  }
}