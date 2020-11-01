import React from 'react';
import {LEADERS} from "./leaders"
import "./RenderLeader.css"

function RenderLeader({name , image , desig , desc}){
    return( 
    <div>
        <div className="leaders-list">
        <div>
            <img className="leaders-image" src={image} alt="..."/>
        </div>
        <div className="leaders-content">
            <h4>{name}</h4>
            <p>{desig}</p>
            <p>{desc}</p>
        </div>
        </div>
    </div>
    )
}

export default RenderLeader;