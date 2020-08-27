import React, { Component } from 'react'
import Sidebar from './../Sidebar/sidebar'
import './test.css'
export default class dataset extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <div className="test-div">
      <h1>UK Newspaper Headlines : Test</h1>
      <div class="test-card">
        <div class="test-container">
          <h1>Try putting on some text to see how it is recognized based on your learning</h1> 
          <form action="/project">
            <input type="text" id="fname" name="firstname" placeholder="Enter a text here !"/> 
            <input className="submit" type="submit" value="Test"/>
        </form>
        </div>
        <h2><i class="fa fa-chevron-right"></i> Search History</h2>
      </div>
    </div>
            </div>
        )
    }
}
