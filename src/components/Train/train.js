import React, { Component } from 'react'
import Sidebar from './../Sidebar/sidebar'
import './train.css'
export default class dataset extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <div className="train-box">
                <h1>UK Newspaper Headlines : Training Model</h1>

                <p> Click Here to Start training your model</p>
                <button 
                                style={{  backgroundColor:"rgb(23, 152, 211)", /* Green */
                                border: "none",
                                    color: "white",
                                    padding: "15px 32px",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    display: "inline-block",
                                    fontSize: "16px",
                                    borderRadius:"0.3rem",
                                    fontWeight:"600",
                                    fontSize:"20px",
                                    boxShadow: "4px 4px 12px 0px rgba(148, 148, 148, 0.685)"
                                
                                    }}
                                >Start Training</button>
                 </div>   
            </div>
        )
    }
}
