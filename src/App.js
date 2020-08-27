import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from './components/Dashboard/dashboard'

import Home from './components/Home/home'

import Course from './components/Courses/Courses'
import Project from './components/Project/Project'
import CreateProject from './components/Createproject/createproject'
import ModelPage from './components/ModelPage/modelpage'
import Dataset from './components/Dataset/dataset'
import Test from './components/Test/test'
import Train from './components/Train/train'
import Deploy from './components/Deploy/deploy'
import Competitions from './components/Competition/competition'
import Settings from './components/Settings/settings'
// import ImageDataset from './components/ImageDataset/imageDataset'
import CopyProject from './components/CopyProject/copyproject'
import Footer from './components/Footer/Footer'
import 'mdbreact/dist/css/mdb.css'



class App extends React.Component {
  constructor(){
    super();
    

  }

 
  
   
  render(){
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="app">
            
            <div className="home-main">
              <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/dashboard" component={Dashboard}></Route>
                 <Route exact path='/course' component={Course}/>
                 <Route exact path='/project' component={Project}/>
                 <Route exact path='/createproject' component={CreateProject}/>
                 <Route exact path='/model-page' component={ModelPage}/>
                 <Route exact path='/dataset' component={Dataset}/>
                 <Route exact path='/test' component={Test}/>
                 <Route exact path='/train' component={Train}/>
                 <Route exact path='/deploy' component={Deploy}/>
                 <Route exact path='/competitions' component={Competitions}/>
                 <Route exact path='/competitions' component={Competitions}/>
                 <Route exact path='/setting' component={Settings}/>
                 {/* <Route exact path='/dataset/images' component={ImageDataset}/> */}
                 <Route exact path='/copyproject' component={CopyProject}/>
                  
              </Switch>
            </div>
          </div>
          <Footer/>
        </BrowserRouter>
      </React.Fragment>
    );
  }
  
}

export default App;
