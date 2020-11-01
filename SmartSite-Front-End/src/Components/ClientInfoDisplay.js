import Axios from 'axios';
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import axios from 'axios'
import './ClientInfoDisplay.css'



class ClientInfoDisplay extends Component{
    constructor(props){
        super(props);

        // this.state={
        //     message: []
        // }

        console.log(this.props);
        //this.shiftWorkers = this.shiftWorkers.bind(this);
    }


    render(){
        return(
            <div className="client_info_full">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap');
                </style> 
                    <h3 className="client_name_default">{this.props.name.username}</h3>
                    <div className="full_batch_render">
                        <div className="batch_1_show_info">
                            <h6>Batch 1 Details: </h6>
                            <p>{this.props.name.batch1_from_timing} to {this.props.name.batch1_to_timing}</p>
                        </div>
                        <div className="batch_2_show_info">
                            <h6>Batch 2 Details: </h6>
                            <p>{this.props.name.batch2_from_timing} to {this.props.name.batch2_to_timing}</p>
                        </div>
                        <div className="batch_3_show_info">
                            <h6>Batch 3 Details: </h6>
                            <p>{this.props.name.batch3_from_timing} to {this.props.name.batch3_to_timing}</p>
                        </div>
                        <div className="batch_4_show_info">
                            <h6>Batch 4 Details: </h6>
                            <p>{this.props.name.batch4_from_timing} to {this.props.name.batch4_to_timing}</p>
                        </div>
                    </div>
                    
                    {/* <div className="get_day">
                        <h5>Day Shift: </h5>
                        <input type="number" name="dayWorkers" onChange={this.shiftWorkers}/>
                    </div>
                    <div className="get_night">
                        <h5>Night Shift: </h5>
                        <input type="number" name="nightWorkers" onChange={this.shiftWorkers}/>
                    </div>
                    <div className="get_percent">
                        <h5>Work Completed in percentage</h5>
                        <input type="number" name="workProgress" onChange={this.shiftWorkers} min="1" max="100"/>
                    </div>
                    <div className="get_percent">
                        <h5>Work Completed in percentage</h5>
                        <input type="number" name="workProgress" onChange={this.shiftWorkers} min="1" max="100"/>
                    </div> */}
                    {/* <div >
                        <button type="submit" className="client_update_btn">
                        
                        </button>
                    </div> */}
            </div>
        )
    }
}

export default ClientInfoDisplay;