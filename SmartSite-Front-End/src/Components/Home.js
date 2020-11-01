import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from "react-router-dom";
import './Home.css'

class Home extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="home">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
                </style> 
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Turret+Road:wght@800&display=swap');
                </style> 
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,500&display=swap');
                </style> 
                <div className="top_content">
                <div className="container">
                    <div className="text">
                        <h1 className="big_text">See the world our way</h1>
                        <p>Providing better solutions for your needs</p>
                    </div>
                    <div className="goin_buttons1">
                        <Link to="/signup">
                            <div className="signup">
                                SignUp
                            </div>    
                        </Link> 
                        <Link to="/login">
                            <div className="login">
                                Login
                            </div>    
                        </Link> 
                    </div>
                </div>
                    <div className="container1">
                        <div className="trespassing">
                            
                        </div>
                        <div className="admin_content">
                            <div className="text">
                                <h1 className="big_text">Admin Login</h1>
                                <p>OOps....No tresspassing Allowed</p>
                            </div>
                            <div className="goin_buttons2">
                                <Link to="/admin-login">
                                    <div className="login">
                                        Login
                                    </div>    
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="works">
                    <p className="workmanship">Workmanship.</p>
                    <p className="reliability">Reliability.</p>
                    <p className="efficiency">Efficiency.</p>
                </div>
                <div className="content_2">
                    <div className="at">
                        <p className="at_header">Our Services</p>
                        <div className="at_content">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br />
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br />
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br />
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." <br />
                        </div>
                    </div>
                    <div className="side_bar">
                        <p className="noworkers">300+</p>
                        <p className="contractors">Contractors</p>
                        <p className="projects">20+</p>
                        <p className="projects_header">Projects</p>
                        <div className="vertical"></div>
                        <div className="horizontal"></div>
                    </div>
                </div>
                <div className="placard_1">
                        Get Your Free Estimate Today
                </div>
                <div className="placard_2">
                    Sign Up to our NewsLetter
                </div>
                <div className="motto">
                    Don't Imagine it, <br /> Just Visualize it.
                </div>
            </div>
        )
    }
}

export default Home;
