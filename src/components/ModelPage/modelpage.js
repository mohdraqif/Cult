import React, { Component } from 'react'
import Sidebar from './../Sidebar/sidebar'
import Dataset from './../../assets/projects/dataset.svg'
import Model from './../../assets/model.svg'
import Test from './../../assets/projects/test.svg'
import Deploy from './../../assets/projects/Deploy.svg'

import './modelpage.css'
export default class modelpage extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <h1>UK Newspaper Headlines</h1>
                <div class="main-box">
                    <div className="box-content">
                        <div className="box">
                            <p><strong>Dataset : </strong> Collect examples of what you want your computer to recognize.</p>
                        </div>
                        <button style={{backgroundColor:"rgb(23, 152, 211)",border: 'none',borderRadius:"4em",width:"100px",height:"100px"}}><a href="/dataset"><img src={Dataset}/></a></button>    
                     </div>

                     <div className="box-content">
                        <div className="box">
                            <p><strong>Model : </strong> Use the examples to train the computer to recognize text.</p>
                        </div>
                        <button style={{backgroundColor:"rgb(23, 152, 211)",border: 'none',borderRadius:"4em",width:"100px",height:"100px"}}><a href="/train"><img src={Model}/></a></button>    
                     </div>
                     <div className="box-content">
                        <div className="box">
                            <p><strong>Test : </strong> Use the examples to train the computer to recognize text.</p>
                        </div>

                        <button style={{backgroundColor:"rgb(23, 152, 211)",border: 'none',borderRadius:"4em",width:"100px",height:"100px"}}><a href="/test"><img src={Test}/></a></button>    
                     </div>
                     <div className="box-content">
                        <div className="box">
                            <p><strong>Deploy : </strong> Use the ML model to make a game in python or in Eureka playground.</p>
                        </div>

                        <button style={{backgroundColor:"rgb(23, 152, 211)",border: 'none',borderRadius:"4em",width:"100px",height:"100px"}}><a href="/deploy"><img src={Deploy} /></a></button>    
                     </div>
                 </div>   
            </div>
        )
    }
}
