import React, { Component } from 'react'

class AdminLogin extends Component{
    constructor(){
        super()
        this.state={
            username: "",
            password: "",
            isClicked: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    handleClick(){
        if(this.state.username === "Admin" && this.state.password === "Admin"){
            this.setState({
                isClicked: true
            })
        }
    }

    updateInput(event){
        this.setState({username : event.target.value})
    }

    updatePassword(event){
        this.setState({password: event.target.value})
    }

    render(){
        const updatedClick = this.state.isClicked
        return(
            <div className="Login">
                <h1>Login</h1>
                <p>Easy access to all premium services with expert guidance....</p>
                <input type="text" onChange={this.updateInput} placeholder="Username"/>
                <input type="text" onChange={this.updatePassword} placeholder="Password"/>
                <br />
                <button type="submit" onClick={this.handleClick}>Submit</button>
                {
                    updatedClick ? <a href="/admin-home">Go to Page</a> : <p>Password Wrong</p>
                }
            </div>
        )
    }
}

export default AdminLogin