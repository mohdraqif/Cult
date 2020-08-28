import React, { Component } from 'react'
import Sidebar from './../Sidebar/sidebar'
import './dataset.css'
import {Col,Row,Button} from 'reactstrap'


export default class dataset extends Component {
    state={
        cards: ["Cats"],
        input:'' ,
        data:[{name:"cats",data:'cats'},
        {name:"cats",data:'cats'},
        {name:"cats",data:'cats'},
        {name:"cats",data:'cats'},
        {name:"cats",data:'cats'},
        {name:"cats",data:'cats'},
        {name:"cats",data:'cats'},
        {name:"cats",data:'cats'},
        {name:"cats",data:'cats'},
      ]
      }
    

    handleChange(e){
      this.state.input= e.target.value;
      this.setState({input:this.state.input})

    }

    handleInput(){
      if(this.state.input){
        this.setState({cards:[...this.state.cards,this.state.input],input:''})
      }else{
        alert('Please enter Class')
      }
      
    }  
    deleteClass(index){
    
      this.state.cards.splice(index,1);
      this.setState({cards:this.state.cards})

    }


  render() {
    return (
      <div>
        <Sidebar/>
        <div className="dataset-main">
        <div className="dataset-div">
          <h1>UK Newspaper Headlines : Dataset</h1>
        </div>
        <div className="add-name">
            <input type="text" placeholder="Enter new class you want to add "
            onChange={(e)=>this.handleChange(e)}
            value={this.state.input}
            />
            <button className="add-name-btn" onClick={()=>this.handleInput()}>Add New Class</button>
          
        </div>
        
        <div className="dataset">
          <Row xs={3}>
        {this.state.cards.map((card,index) => {
          return(
           
            <Col  >
           
            <div className="dataset-card" key={index}>
              <div className="dataset-container">
                <div className="container-main">
                <h2>{card}</h2> 
                <button onClick={()=>this.deleteClass(index)} >X</button>
                </div>
                <div className="data-area">
                {
                  this.state.data.map((dta,idx)=>{
                    return(
                      <div key={idx}>
                        <div className="data-value">
                                <p>{dta.data}</p>
                                <button className="close" style={{color:"black"}}>x</button>
                         </div> 

                      </div>  
                    )
                  })
                }
                </div>
                <input type="text" placeholder="Enter input" style={{textAlign:"center"}}></input>    
              </div>
            </div>
            </Col>
          )
        })}
        </Row>
        </div>
     
        <img src={require('../../assets/proDataset.png')} alt="" height="320px" />
    
      </div>
      
            </div>
        )
    }
}
