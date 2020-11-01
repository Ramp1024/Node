import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import './ClientShowForm.css'
import axios from 'axios'
import ClientInfoDisplay from './ClientInfoDisplay'
import ClientNo from './ClientNo'


class ClientShowForm extends Component{
    constructor(){
        super();

        this.state={
            username: "",
            message: [],
            isClicked: false
        }
        
        this.inputChange = this.inputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    inputChange(event){
        this.setState({username : event.target.value})
    }

    handleSubmit(){
        console.log(this.state.username + " is the username to be found");

        const {username} = this.state;

        const book = {
            username
        }

        this.setState({
            isClicked: true
        })

        //console.log(book);

        axios
      .post('http://localhost:9000/client-search', book)
      .then((res) => {
          this.setState({
              message: res.data
          })

        //   this.state.message.map(oneClient => 
        //     console.log(oneClient.username)
        //     )

          console.log(this.state.message);
      })
      .catch(err => {
        console.error(err);
      });
    }

    render(){

        const updatedClick = this.state.isClicked
       
        return(
            <div className="update_form_full">
                 <style>
                    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
                </style>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
                </style>
                <div className="update_header">
                    <h1>Client Info: </h1>
                    <h3 className="update_tail">Enter the name of the client to show details</h3>
                </div>
                <div className="total_inputs">
                    <input type="text" onChange={this.inputChange} placeholder="Username" className="client_input"/>
                    <button type="submit" onClick={this.handleSubmit} className="client_submit">Submit</button>
                </div>
                <div className="client_info_render">
                    {updatedClick ? <ClientInfoDisplay name={this.state.message} /> : <ClientNo />}
                </div>
            </div>
        )
    }
}

export default ClientShowForm;
