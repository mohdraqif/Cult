import React, { Component } from 'react'
import Sidebar from './../Sidebar/sidebar'
import './copyproject.css'
import {Row,Col} from 'reactstrap'

import images from './../../assets/addproimg.png'
import Import from './../../assets/import.png'
export default class copyproject extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
            {name:"Cats and Dogs",desc:"Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.",type:'Image',link:'/template'},
            {name:"Cats and Dogs",desc:"Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.",type:'Image',link:'/template'},
            {name:"Cats and Dogs",desc:"Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.",type:'Image',link:'/template'},
            {name:"Cats and Dogs",desc:"Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.",type:'Image',link:'/template'},
            {name:"Cats and Dogs",desc:"Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.",type:'Image',link:'/template'},
            {name:"Cats and Dogs",desc:"Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.",type:'Image',link:'/template'},
            {name:"Cats and Dogs",desc:"Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.",type:'Image',link:'/template'},
            {name:"Cats and Dogs",desc:"Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.",type:'Image',link:'/template'},
            {name:"Cats and Dogs",desc:"Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.Recognizing the photos of cats Vs dogs.",type:'Image',link:'/template'}        
        ]
        }
    }

    render() {
        return (
            <div>
                <Sidebar/>
                <div className="main1">
                    <h1>Copy Template</h1>
                    <Row xs={3}>
                        {
                            this.state.data.map((dta,index)=>{
                                return (
                                    <Col>
                                    <div key={index} className="cpy-box">
                                        <h2>{dta.name}</h2>
                                        <div className="cpy-box-para">
                                            <p>{dta.desc}</p>
                                            <p>Recognized as : <strong>{dta.type}</strong></p>
                                            <img src={require('../../assets/addproimg.png')}/>
                                       </div>
                                        <button><img src={Import}/></button>
                                    </div>
                                    </Col>    
                                )
                            })
                        }
                    </Row>    
                 </div>   
            </div>
        )
    }
}
