import React, { Component } from 'react'
import Sidebar from './../Sidebar/sidebar'

import './deploy.css'
export default class dataset extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
      <div className="deploy-main">
      <div className="deploy-div">
        <h1>UK Newspaper Headlines : Model</h1>
      </div>
      <div className="deploy">
        <div class="deploy-card">
          <div className="deploy-img">
           <a href="/playground"> <img src={require('../../assets/1c9cd6 logo.png')} alt="" /></a>
          </div>
          <h2>AI Playground</h2>
        </div>
        <div className="details">
          <h3>Make a project in myAImate-playground using block logics and enjoy your 
            logic with implementable and working experience.</h3>
        </div>
      </div>

      <div className="deploy">
        <div class="deploy-card">
          <div className="deploy-img">
           <a href="/python"> <img src={require('../../assets/Python.png')} alt="" /></a>
          </div>
          <h2>Python</h2>
        </div>
        <div className="details">
          <h3>Write pthon code to use your machine language model and enjoy your 
            logic with implementable and working experience.</h3>
        </div>
      </div>
    </div>
            </div>
        )
    }
}
