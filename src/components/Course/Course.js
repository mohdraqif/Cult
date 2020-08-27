import './course.css'

import React, { Component } from 'react'

export default class Course extends Component {
constructor(props){
  super(props);
  this.state={
    courses:[
    {id:"1",Title:"Intoduction to IOT"},
    {id:"2",Title:"Intoduction to IOT"},
    {id:"3",Title:"Intoduction to IOT"},
    {id:"4",Title:"Intoduction to IOT"},  
    {id:"5",Title:"Intoduction to IOT"},
    {id:"6",Title:"Intoduction to IOT"},
    {id:"7",Title:"Intoduction to IOT"},
    {id:"8",Title:"Intoduction to IOT"},
    {id:"9",Title:"Intoduction to IOT"},
    ]
  }
}

  render() {
    return (
      <div className="grid-container">
        {
          this.state.courses.map((course,index)=>{
            return (
              <div key={index}>
                  <div class="item1">
                    <div class="card-all">
                      <div class="container-box">
                        <p>Introduction to IOT</p> 
                        <a href="#/vid"><img src={require('../../assets/Eureka_vid.png')} alt="" title="Video"/></a>
                        <a href="#/doc"><img src={require('../../assets/Eureka_doc.png')} alt="" title="Text"/></a>
                        <a href="#/pro"><img src={require('../../assets/Eureka_pro.png')} alt="" title="Assignments"/></a>
                      </div>
                    </div>
                  </div>
              </div>  
            )
          })
        }
      </div>
    )
  }
}

 