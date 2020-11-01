import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";



class Graphs extends React.Component {
    constructor(props){
        super(props)
        
    }
  render() {
      const foundationParsed = parseInt(this.props.foundation)
      const excavationParsed = parseInt(this.props.excavation)
      const constructionParsed = parseInt(this.props.construction)
      const interiorParsed = parseInt(this.props.interior)
      const prevFoundationParsed = parseInt(this.props.prevFoundation)
      const prevExcavationParsed = parseInt(this.props.prevExcavation)
      const prevConstructionParsed = parseInt(this.props.prevConstruction)
      const prevInteriorParsed = parseInt(this.props.prevInterior)


      const data = [
        ["Work", "Today's Progress" ,"Yesterday's Work", { role: "style" }],
        ["Foundation", (foundationParsed), (prevFoundationParsed) , "color: gray"],
        ["Excavation", (excavationParsed),(prevExcavationParsed) ,"color: #76A7FA"],
        ["Construction",(constructionParsed), (prevConstructionParsed), "color: blue"],
        ["Interior", (interiorParsed), (prevInteriorParsed), "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
      ];

    return (
      <div className="">
        <Chart chartType="BarChart" width="100%" height="400px" data={data} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

export default Graphs
