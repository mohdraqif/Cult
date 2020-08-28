import React, { Component } from 'react'
import './createproject.css'
import Sidebar from './../Sidebar/sidebar'

import Number from './../../assets/Number.svg'
import Sound from './../../assets/sound.png'
import Text from './../../assets/Text.png'
import Images from './../../assets/images.png'
import image from './../../assets/addproimg.png'

export default class createproject extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <div className="addproject">
                    <h1>Add Projects</h1>
                    <div className="form">
                        <h2>Project Name:</h2>
                        <input 
                        placeholder="Project Name"
                        type="text"
                        />
                        <h2>Description :</h2>
                        <input 
                        placeholder="Describe your Project Here"
                        type="text"
                        />
                        <h2>Recognising as:</h2>
                        <div className="images">
                            <img src={Text}/>
                            <img src={Images}/>
                            <img src={Sound}/>
                            <img src={Number}/>
                        </div>     
                        <button>Create Project</button>                        
                    </div>     
                </div>
                <div className="wall"> 
                    <img src={image} />
                    </div>
            </div>
        )
    }
}
