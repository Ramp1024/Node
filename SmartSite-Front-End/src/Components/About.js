import React from "react"
import {Link, withRouter} from "react-router-dom"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'
import "./AboutComponent.css"
import RenderLeader from "./RenderLeader"
import {LEADERS} from "./leaders"

function AboutComponent(){
    return(
       <div className="about-div">
           <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
            <div className="about-divtablecontent">
            <div className="about-divcontent">
                <h3>About</h3>
                <h2>Our History</h2>
                <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
           </div>
           <div className="about-table">
            <table>
                <tr className="table-tr">
                    <th className="tablehead">Facts at a Glance</th>
                    <th></th>
                </tr>
                <tr>
                    <th>Started</th>
                    <td>May 19 2001</td>
                </tr>
                <tr>
                    <th>Major Stake Holder</th>
                    <td>Abdul Kalam</td>
                </tr>
                <tr>
                    <th>Last Year Turn Over</th>
                    <td>$1,11,111,111</td>
                </tr>
                <tr>
                    <th>Employees</th>
                    <td>40</td>
                </tr>
            </table>
           </div>
           </div>
           <div style={{ backgroundColor : "darkgoldenrod"}}>
              <Card  className="card-ca">
                <Card.Body >
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        One cannot think well, love well, sleep well, if one has not dined well.
                        {' '}
                    </p>
                    <footer className="blockquote-footer">
                    Virginia Woolf<cite title="Source Title">A Room of One's Own</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
              </Card>
           </div>
           <div className="leaderss">
                {LEADERS.map(leader => (
                    <RenderLeader key={leader.id} name={leader.name} image={leader.image} desig={leader.designation} desc={leader.description}/> 
                ))}
           </div>  
           <br/>
        <br/>
       </div>

    )
}

export default AboutComponent