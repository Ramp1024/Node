import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import axios from 'axios'

export default class Batch1 extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            batch1_from_timing: "",
            batch1_to_timing: "",
            batch1_projectName: "",
            batch1_department: "",
            batch1_wage: "",
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
    
        const { username, batch1_from_timing , batch1_to_timing, batch1_projectName, batch1_department, batch1_wage ,message} = this.state;
    
        const book = {
          username,
          batch1_from_timing,
          batch1_to_timing,
          batch1_projectName,
          batch1_department,
          batch1_wage
        };
        console.log(batch1_from_timing);
        console.log(batch1_to_timing);
        console.log(batch1_department);
        console.log(batch1_projectName);
        console.log(batch1_wage);
    
        axios
          .post('http://localhost:9000/client-detailsBatchOne', book)
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
                <div className="batch_1_full">
                            <h5>Batch 1 comprises of the workers from id, 1 to 40.</h5>
                            <p>For info on the name of the workers refer to the <br /> scrollable content on the left side of this page</p>
                            <form onSubmit={this.handleSubmit} className="batch_1_form">
                                <input type="text" onChange={this.handleInputChange} name="username" placeholder="Username" />
                                <input type="text" onChange={this.handleInputChange} name="batch1_from_timing" placeholder="Work Start Timings"/>
                                <input type="text" onChange={this.handleInputChange} name="batch1_to_timing" placeholder="Work Finish Timing"/>
                                <input type="text" onChange={this.handleInputChange} name="batch1_projectName" placeholder="ProjectName"/>
                                <input type="text" onChange={this.handleInputChange} name="batch1_department" placeholder="Work Area"/>
                                <input type="text" onChange={this.handleInputChange} name="batch1_wage" placeholder="Wage Per Day" />
                                <button type="submit">Submit Details</button>
                            </form>
                        </div>
            </div>
        )
    }
}

