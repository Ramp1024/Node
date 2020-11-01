import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'


export default class Batch4 extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            batch4_from_timing: "",
            batch4_to_timing: "",
            batch4_projectName: "",
            batch4_department: "",
            batch4_wage: "",
            message: ""
          }
          this.handleSubmit= this.handleSubmit.bind(this);
          this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

      handleSubmit = e => {
        e.preventDefault();
    
        const { username, batch4_from_timing , batch4_to_timing, batch4_projectName, batch4_department, batch4_wage ,message} = this.state;
    
        const book = {
          username,
          batch4_from_timing,
          batch4_to_timing,
          batch4_projectName,
          batch4_department,
          batch4_wage
        };
        console.log(batch4_from_timing);
        console.log(batch4_to_timing);
        console.log(batch4_department);
        console.log(batch4_projectName);
        console.log(batch4_wage);
    
        axios
          .post('http://localhost:9000/client-detailsBatchFour', book)
          .then((res) => {
              this.setState({
                  message: res.data
              })
              console.log(this.state.message);
          })
          .catch(err => {
            console.error(err);
          });
    
      };

    render(){
        return (
            <div>
                <div className="batch_4_full">
                            <h5>Batch 4 comprises of the workers from id, 121 to 160.</h5>
                            <p>For info on the name of the workers refer to the <br /> scrollable content on the left side of this page</p>
                            <form onSubmit={this.handleSubmit} className="batch_4_form">
                                <input type="text" onChange={this.handleInputChange} name="username" placeholder="Username" />
                                <input type="text" onChange={this.handleInputChange} name="batch4_from_timing" placeholder="Work Start Timings"/>
                                <input type="text" onChange={this.handleInputChange} name="batch4_to_timing" placeholder="Work Finish Timing"/>
                                <input type="text" onChange={this.handleInputChange} name="batch4_projectName" placeholder="ProjectName"/>
                                <input type="text" onChange={this.handleInputChange} name="batch4_department" placeholder="Work Area"/>
                                <input type="text" onChange={this.handleInputChange} name="batch4_wage" placeholder="Wage Per Day"/>
                                <button type="submit">Submit Details</button>
                            </form>
                        </div>
            </div>
        )
    }
}