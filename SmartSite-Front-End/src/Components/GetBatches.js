import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import Batch1 from './Batch1';
import Batch2 from './Batch2';
import Batch3 from './Batch3';
import Batch4 from './Batch4';
import ClientNo from './ClientNo'
import './GetBatches.css'

// const fullBatch = [""]
// const batch1 = [""]
// const batch2 = [""]
// const batch3 = [""]
// const batch4 = [""]

// class GetBatches extends Component{
//     constructor(props){
//         super(props);

//         // this.state = {
//         //     isClicked : false
//         // }

//         console.log(this.props);

//         fullBatch.push(this.props.names);

//         console.log(fullBatch);
//         this.batchGroup1 = this.batchGroup1.bind(this);
//         this.batchGroup2 = this.batchGroup2.bind(this);
//         this.batchGroup3 = this.batchGroup3.bind(this);
//         this.batchGroup4 = this.batchGroup4.bind(this);
//         //this.handleClick1 = this.handleClick1.bind(this);
//     }

//     componentWillMount(){
//         this.batchGroup1();
//         this.batchGroup2();
//         this.batchGroup3();
//         this.batchGroup4();
//     }

    

//     batchGroup1(){
//         for(var i=0; i<40; i++){
//             batch1.push(fullBatch[1][i]);
//         }

//          console.log(batch1);
        
//     }

//     batchGroup2(){
//         for(var i=41; i<80; i++){
//             batch2.push(fullBatch[1][i]);
//         }
//          console.log(batch2);
//     }

//     batchGroup3(){
//         for(var i=81; i<120; i++){
//             batch3.push(fullBatch[1][i]);
//         }
//         console.log(batch3);
//     }

//     batchGroup4(){
//         for(var i=121; i<161; i++){
//             batch4.push(fullBatch[1][i]);
//         }
//         console.log(batch4);
//     }

//     // handleClick1(){
//     //     this.setState({
//     //         isClicked: true
//     //     });
//     //     batch1.map(single => (
//     //         console.log(single)
//     //     ))
//     // }

//     render(){
//         // const batch1Names = []
//         // // console.log(batch1Names);
//         // for(var i= 0; i<batch1.length; i++){
//         //     batch1Names.push(<p>{batch1[i]}</p>)
//         // }
//         return(
//             <div className="get_batches_full">
//                 {/* <div>
//                      {
//                          console.log(batch1)
// // <div>{batch1[0]}</div>
//                      }
//                 </div> */}
//                 {/* <div className="batch_1">
//                 <h3>Batch1</h3>

//                     <BatchLayout batch = {batch1} />
//                 </div> */}
//                 {/* <div className="batch_2">
//                     <h3>Batch2</h3>
//                     <BatchLayout batch = {batch2} />
//                 </div> */}
//                 {/*
//                 <div>
//                 <h3>Batch3</h3>
//                     <BatchLayout batch = {batch3} />
//                 </div> */}
//                 {/* <button onClick={this.handleClick1} type="button">Get Batch 1</button> */}
//             </div>
//         )
//     }
// }


class GetBatches extends Component{
    constructor(props){
        super(props);

        this.state = {
          isClicked1: false,
          isClicked2: false,
          isClicked3: false,
          isClicked4: false
        }

        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);


    }

    handleClick1(){
      this.setState({
        isClicked1 : true
      });
    }

    handleClick2(){
      this.setState({
        isClicked2 : true
      });
    }

    handleClick3(){
      this.setState({
        isClicked3 : true
      });
    }

    handleClick4(){
      this.setState({
        isClicked4 : true
      });
    }


    render(){

      const updatedClick1 = this.state.isClicked1
      const updatedClick2 = this.state.isClicked2
      const updatedClick3 = this.state.isClicked3
      const updatedClick4 = this.state.isClicked4



        return(
            <div className="batch_full">
              <div className="batch_1_form_render">
                <button type="submit" onClick={this.handleClick1} className="update1">Update Batch 1</button>
                  <div className="batch_1_render">
                  {
                      updatedClick1 ? <Batch1 /> : ""
                    }
                  </div>
              </div>
              <div className="batch_2_form_render">
                <button type="submit" onClick={this.handleClick2} className="update2">Update Batch 2</button>
                <div className="batch_2_render">
                {
                      updatedClick2 ? <Batch2 /> : ""
                    }
                </div>
              </div>
              <div className="batch_3_form_render">
                <button type="submit" onClick={this.handleClick3} className="update3">Update Batch 3</button>
                <div className="batch_3_render">
                {
                      updatedClick3 ? <Batch3 /> : ""
                    }
                </div>
              </div>
              <div className="batch_4_form_render">
                <button type="submit" onClick={this.handleClick4} className="update4">Update Batch 4</button>
                <div className="batch_4_render">
                {
                      updatedClick4 ? <Batch4 /> : ""
                    }
                </div>
              </div>
            </div>
        )
    }
}

 export default withRouter(GetBatches);