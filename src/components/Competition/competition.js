import Sidebar from './../Sidebar/sidebar'
import './competition.css'
import React, { Component } from 'react'
import complete from './../../assets/Complete.png'
import live from './../../assets/Live.png'
import upcoming from './../../assets/Upcoming.png'

export default class competition extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <div className="comp-box">
                    <h1>Technical Competitions</h1>
                    <p>Participate in different Competitions to test your knowledge and gain experience</p>
                    <div className="comp-box-content">
                        <div className="comp-card">
                                <h2>Completed</h2>
                                <img src={complete}/>
                                <h1>23</h1>
                                <p>We have amazing competitions rounds</p>
                                <button className="btn-1">View</button>
                         </div>

                         <div className="comp-card">
                            <h2>Live</h2>
                            <img src={live}/>
                            <h1>15</h1>
                                <p> Don't loose chance to show your talent</p>
                                <button className="btn-2">Join</button>
                         </div>
                         <div className="comp-card">
                         <h2>Upcoming</h2>
                            
                         <img src={upcoming}/>
                         <h1>2</h1>
                                <p>A person always have to test its capability</p>
                                <button className="btn-1">View</button>
                         </div>   

                     </div>   
                 </div>          
            </div>
        )
    }
}
