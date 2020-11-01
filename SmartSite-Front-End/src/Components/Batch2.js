import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'


export default class Batch2 extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            batch2_from_timing: "",
            batch2_to_timing: "",
            batch2_projectName: "",
            batch2_department: "",
            batch2_wage: "",
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
    
        const { username, batch2_from_timing , batch2_to_timing, batch2_projectName, batch2_department, batch2_wage ,message} = this.state;
    
        const book = {
          username,
          batch2_from_timing,
          batch2_to_timing,
          batch2_projectName,
          batch2_department,
          batch2_wage
        };
        console.log(batch2_from_timing);
        console.log(batch2_to_timing);
        console.log(batch2_department);
        console.log(batch2_projectName);
        console.log(batch2_wage);
    
        axios
        .post('http://localhost:9000/client-detailsBatchTwo', book)
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
                <div className="batch_2_full">
                            <h5>Batch 2 comprises of the workers from id, 41 to 81.</h5>
                            <p>For info on the name of the workers refer to the <br /> scrollable content on the left side of this page</p>
                            <form onSubmit={this.handleSubmit} className="batch_2_form">
                                <input type="text" onChange={this.handleInputChange} name="username" placeholder="Username" />
                                <input type="text" onChange={this.handleInputChange} name="batch2_from_timing" placeholder="Work Start Timings"/>
                                <input type="text" onChange={this.handleInputChange} name="batch2_to_timing" placeholder="Work Finish Timing"/>
                                <input type="text" onChange={this.handleInputChange} name="batch2_projectName" placeholder="ProjectName"/>
                                <input type="text" onChange={this.handleInputChange} name="batch2_department" placeholder="Work Area"/>
                                <input type="text" onChange={this.handleInputChange} name="batch2_wage" placeholder="Wage Per Day"/>
                                <button type="submit">Submit Details</button>
                            </form>
                        </div>
            </div>
        )
    }
}