import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
import './AdminHome.css'
import axios from 'axios';
import ClientShowForm from './ClientShowForm';


class AdminHome extends Component{
    constructor(){
        super();

        this.state = {
            list: [],
            showUpdate: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);

    }  

    handleClick(){
        axios
        .get('http://localhost:9000/registered-clients')
        .then((res) => {
            this.setState({
                list: res.data
            })
            console.log(this.state.list);

         })
        
        .catch(err => {
          console.error(err);
        });
    }  
    
    handleClick2(){
        this.setState({
            showUpdate: true
        });
    }

    render(){

        const updatedButton = this.state.showUpdate;

        return(
            <div className="admin_home_full">
                 <style>
                    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
                    </style> 
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
                    </style> 
                <div className="welcome_card">
                    <div className="welcome_header">
                        <h1 className="welcome_title">Welcome, </h1>
                        <p className="welcome_quote">
                        “You can dream, create, design, and build the most wonderful place in the world. But it requires people to make the dream a reality.” <br />– Walt Disney
                        </p>
                    </div>
                </div>
                <button onClick={this.handleClick} type="submit" class="btn1">
                    Get Clients List
                </button>
                <div className="clientList">
                        {
                            this.state.list.map(ar =>
                            <p>{ar.username}</p>
                          )
                        }
                </div>
                <button onClick={this.handleClick2} type="submit" class="btn2">
                    Show Specific Client Info
                </button>
                <div className="form_render">
                    {
                       updatedButton ?  <ClientShowForm /> : ""
                    }
                </div>
                <Link to="/admin-home/workers-update">
                    <div className="btn3">
                        Update Workers details
                    </div>
                </Link>
                <Link to="/admin-home/materials-procured">
                    <div className="btn4">
                        Update Materials Details and Work Progress
                    </div>
                </Link>
                <Link to="/admin-home/update-images">
                    <div className="btn5">
                        Update Images and Plans
                    </div>
                </Link>
                <button className="logout">
                    <a href="/">Logout</a>
                </button>
            </div>
        )
    }
}

export default withRouter(AdminHome);
