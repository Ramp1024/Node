import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import axios from 'axios'
import './WorkersUpdate.css'
import SupervisorColumn from './SupervisorColumn'
import GetBatches from './GetBatches'

var names = []

names.push("Ram",  "ShyamRam", "Shakthi" , "Roshan" , "Kasi" , "Mani" )

var batchNames = [""]


class WorkersUpdate extends Component{
    constructor(){
        super();

        this.state={
            list: [""],
        }

        this.updateBatch = this.updateBatch.bind(this);
    }
    
    componentDidMount(){
        axios
        .get('http://localhost:9000/all-worker-details')
        .then((res) => {
            // res.data.map(single=>
            //     setTimeout(function() {
            //         list.push(single)
            //     },0.2)
            // )
                this.setState({
                    list: res.data
                })
                //console.log(this.state.list)
                this.updateBatch(this.state.list)

         })
        
        .catch(err => {
          console.error(err);
        });

    }

    updateBatch = (list)=>{
        //console.log(list[0]);
        for(var i=0 ; i<list.length; i++){
            batchNames.push(list[i].name)
        }
        // console.log(batchNames);
      }



    render(){
        
        return(
            <div className="worker_update_full">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Turret+Road:wght@800&display=swap');
                </style>
                <h1 className="update_header_title">Update Worker and Wage Details</h1>
                
                <div className="worker_list_full">
                    { 
                    this.state.list.map(single=> 
                            <p>{single.name}</p>
                        ) 
                    }                    
                </div>
                <div className="supervisor">
                    <SupervisorColumn names={names} />
                </div>
                <div className="get_batches">
                    {/* {
                        console.log(batchNames)
                    } */}
                    <GetBatches names={batchNames} />
                </div>   
            </div>
        )
    }
}

export default withRouter(WorkersUpdate);
