import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import './SupervisorColumn.css'


class SupervisorColumn extends Component{
    constructor(props){
        super(props);
        console.log(this.props.names);
    }

    render(){
        return(
            <div className="supervisor_full">
                <h1>Supervisors</h1>
                <hr></hr>
                <div className="supervisor_name">
                    {
                        this.props.names.map( singleName => 
                            <p>{singleName}</p>
                        )}
                </div>
            </div>
        )
    }
}

export default withRouter(SupervisorColumn);