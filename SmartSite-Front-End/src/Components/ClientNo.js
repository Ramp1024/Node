import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import './ClientNo.css'

class ClientNo extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="client_no_full">
                <div className="oops">
                    :(
                </div>
                <p className="oops_message"> No client entered </p>
            </div>
        )
    }
}

export default withRouter(ClientNo);