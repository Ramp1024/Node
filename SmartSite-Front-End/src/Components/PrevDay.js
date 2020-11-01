import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';


class PrevState extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="about">
                <h1>About Page</h1>
            </div>
        )
    }
}

export default withRouter(PrevState);
