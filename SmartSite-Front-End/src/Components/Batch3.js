import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'


export default class Batch3 extends Component {
    constructor(){
        super();

        this.state = {
            username : "",
            batch3_from_timing: "",
            batch3_to_timing: "",
            batch3_projectName: "",
            batch3_department: "",
            batch3_wage: "",
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
    
        const { username,batch3_from_timing , batch3_to_timing, batch3_projectName, batch3_department, batch3_wage ,message} = this.state;
    
        const book = {
          username,
          batch3_from_timing,
          batch3_to_timing,
          batch3_projectName,
          batch3_department,
          batch3_wage
        };
        console.log(batch3_from_timing);
        console.log(batch3_to_timing);
        console.log(batch3_department);
        console.log(batch3_projectName);
        console.log(batch3_wage);
    
        axios
        .post('http://localhost:9000/client-detailsBatchThree', book)
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
                <div className="batch_3_full">
                            <h5>Batch 3 comprises of the workers from id, 81 to 121.</h5>
                            <p>For info on the name of the workers refer to the <br /> scrollable content on the left side of this page</p>
                            <form onSubmit={this.handleSubmit} className="batch_3_form">
                                <input type="text" onChange={this.handleInputChange} name="username" placeholder="Username" />
                                <input type="text" onChange={this.handleInputChange} name="batch3_from_timing" placeholder="Work Start Timings"/>
                                <input type="text" onChange={this.handleInputChange} name="batch3_to_timing" placeholder="Work Finish Timing"/>
                                <input type="text" onChange={this.handleInputChange} name="batch3_projectName" placeholder="ProjectName"/>
                                <input type="text" onChange={this.handleInputChange} name="batch3_department" placeholder="Work Area"/>
                                <input type="text" onChange={this.handleInputChange} name="batch3_wage" placeholder="Wage Per Day" />
                                <button type="submit">Submit Details</button>
                            </form>
                        </div>
            </div>
        )
    }
}

