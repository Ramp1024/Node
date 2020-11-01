// import React, {Component} from 'react'
// import {withRouter} from 'react-router-dom';
// import PrevDay from './PrevDay'
// import Today from './Today'


// class ClientHome extends Component{
//     constructor(){
//         super();

//         this.state={
//             isClicked1: false,
//             isClicked2: false
//         }
//     }

//     handleClick1(){
//         this.setState({
//             isClicked1: true
//         })
//     }

//     handleClick2(){
//         this.setState({
//             isClicked2: true
//         })
//     }

//     render(){
//         const updatedButton1 = this.state.isClicked1;
//         const updatedButton2 = this.state.isClicked2;
//         return(
//             <div className="client_home_render">
//                 <form onSubmit={this.handleSubmit1}>
//                 <button type="submit">Previous Day's Work</button>
//                 </form>
//                 <form onSubmit={this.handleSubmit2}>
//                     <button type="submit">Today's Work</button>
//                 </form>               
//             </div>
//         )
//     }
// }

// export default withRouter(ClientHome);

import React ,{Component} from 'react';
import axios from "axios"
import Graphs from './Graphs'
import './ClientHome.css'

var pathFull = window.location.pathname
var id = pathFull.substring(13)
//var fullData = null

class ClientHome extends Component {
  constructor(props) {
    super(props);


    this.state = {
      name: "",
      fullData: ""
     }

    //this.fullDataRender = this.fullDataRender.bind(this)
    //this.fullDataRender1 = this.fullDataRender1.bind(this)
  }

  handleSubmit(){

    
}

componentDidMount(){
  console.log(id);

    const book = {
      clientId : id
    };

    axios
    .post('http://localhost:9000/show-details-present',book)
    .then((res) => {
         this.setState({
          fullData : res.data
         })
      console.log(this.state.fullData);
    })
    .catch(err => {
      console.error(err);
    })
}

  render() {
    console.log(this.state.fullData);
    if(this.state.fullData != null){
      return (
     
        <div>
          
          {/* <button type="button" onClick={this.handleSubmit}>Get Details</button> */}
            {this.state.fullData.username}
            <h4 className="details">Your Details</h4>
            <div>
              <Graphs 
                foundation={this.state.fullData.foundationWork} 
                excavation={this.state.fullData.excavationWork}
                interior = {this.state.fullData.interiorDesignWork}
                construction = {this.state.fullData.constructionWork}
                prevFoundation = {this.state.fullData.foundationWorkPrev}
                prevExcavation = {this.state.fullData.excavationWorkPrev}
                prevConstruction = {this.state.fullData.constructionWorkPrev}
                prevInterior = {this.state.fullData.interiorDesignWorkPrev}
                />
            </div>
            <div className="batch1">
              <p>{this.state.fullData.batch1_department}</p>
              <p>{this.state.fullData.batch1_from_timing} to {this.state.fullData.batch1_to_timing}</p>
              <p>Per Worker Wage: {this.state.fullData.batch1_wage}</p>
            </div>
            <div className="batch2">
              <p>{this.state.fullData.batch2_department}</p>
              <p>{this.state.fullData.batch2_from_timing} to {this.state.fullData.batch2_to_timing}</p>
              <p>Per Worker Wage: {this.state.fullData.batch2_wage}</p>
            </div>
            <div>
              <img src={this.state.fullData.designPhoto} alt="Shyam Photo" width="500px" height="500px" />
            </div>
            <button className="logout_client">
                    <a href="/">Logout</a>
            </button>
        </div>
        
            )
          }
  }
    }

export default ClientHome;
