import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import './About.css'
import './MaterialsProcured.css'
import axios from 'axios'

class MaterialsProcured extends Component{
    constructor(){
        super();

        this.state={
            username : "",
            material1: "",
            material1_price: "",
            material2: "",
            material2_price: "",
            material3: "",
            material3_price: "",
            material4: "",
            material4_price: "",
            material5: "",
            material5_price: "",
            message: "",
            materials_price: "",
            foundationWork: "",
            excavationWork: "",
            constructionWork: "",
            interiorDesignWork: ""
        }
    }
    
    handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
      handleSubmit = e => {
        e.preventDefault();
    
        const { 
            username, 
            material1, 
            material1_price, 
            material2, 
            material2_price, 
            material3, 
            material3_price, 
            material4, 
            material4_price, 
            material5, 
            material5_price 
        } = this.state;
    
        const book = {
            username, 
            material1, 
            material1_price, 
            material2, 
            material2_price, 
            material3, 
            material3_price, 
            material4, 
            material4_price, 
            material5, 
            material5_price,
        };
    
        axios
          .post('http://localhost:9000/client-detailsMaterials', book)
          .then((res) => {
               this.setState({
                    materials_price: res.data.materials_cost   
                })
              console.log(this.state.materials_price);
          })
          .catch(err => {
            console.error(err);
          });
    
      };

      handleSubmit1 = e => {
        e.preventDefault();
    
        const { 
            username, 
            foundationWork,
            excavationWork,
            constructionWork,
            interiorDesignWork

        } = this.state;
    
        const book = {
            username, 
            foundationWork,
            excavationWork,
            constructionWork,
            interiorDesignWork
        };
    
        axios
          .post('http://localhost:9000/client-details', book)
          .then((res) => {
               this.setState({
                    message: res.data  
                })

          })
          .catch(err => {
            console.error(err);
          });
    
      };

    render(){
        return(
            <div className="full_page">
                <div className="full_materials_render">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
                        @import url('https://fonts.googleapis.com/css2?family=Turret+Road:wght@800&display=swap');
                    </style>
                    <h1 className="materials_header">Materials Procured Update</h1>
                    <form onSubmit={this.handleSubmit} className="materials_form" >
                        <input type="text" placeholder="Username" name="username" onChange={this.handleInputChange}/>
                        <div className="material_1_input">
                            <input type="text" placeholder="Material One" name="material1" onChange={this.handleInputChange}/>
                            <input type="number" placeholder="Price" name="material1_price" onChange={this.handleInputChange}/>
                        </div>
                        <div className="material_2_input">
                            <input type="text" placeholder="Material Two" name="material2" onChange={this.handleInputChange}/>
                            <input type="number" placeholder="Price" name="material2_price" onChange={this.handleInputChange}/>
                        </div>
                        <div className="material_3_input">
                            <input type="text" placeholder="Material Three" name="material3" onChange={this.handleInputChange}/>
                            <input type="number" placeholder="Price" name="material3_price" onChange={this.handleInputChange}/>
                        </div>
                        <div className="material_4_input">
                            <input type="text" placeholder="Material Four" name="material4" onChange={this.handleInputChange}/>
                            <input type="number" placeholder="Price" name="material4_price" onChange={this.handleInputChange}/>
                        </div>
                        <div className="material_5_input">
                            <input type="text" placeholder="Material Five" name="material5" onChange={this.handleInputChange}/>
                            <input type="number" placeholder="Price" name="material5_price" onChange={this.handleInputChange}/>
                        </div>
                        <button type="submit">Update Materials List</button>
                    </form>
                <div>
                    <p>{this.state.materials_price}</p>
                </div>
                </div>
                <div className="full_progress_render">
                    <form onSubmit={this.handleSubmit1} className="progress_form">
                        <div className="foundation_progress">
                            <h3>Foundation Work Progress:</h3>
                            <input onChange={this.handleInputChange} type="number" name="foundationWork" placeholder="Enter Percentage" min="0" max="100" />
                        </div>
                        <div className="foundation_progress">
                            <h3>Excavation Work Progress:</h3>
                            <input onChange={this.handleInputChange} type="number" name="excavationWork" placeholder="Enter Percentage" min="0" max="100" />
                        </div>
                        <div className="foundation_progress">
                            <h3>Construction Work Progress:</h3>
                            <input onChange={this.handleInputChange} type="number" name="constructionWork" placeholder="Enter Percentage" min="0" max="100" />
                        </div>
                        <div className="foundation_progress">
                            <h3>Interior Work Progress:</h3>
                            <input onChange={this.handleInputChange} type="number" name="interiorDesignWork" placeholder="Enter Percentage" min="0" max="100" />
                        </div>
                        <button type="submit">Submit Progress</button>
                    </form>
                </div>
                <div>
                    <p>{this.state.message}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(MaterialsProcured);
