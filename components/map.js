import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import { geoPath } from "d3-geo"
import { geoTimes } from "d3-geo-projection"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  Markers,
  Marker,
  Lines,
  Line,
  Annotation
} from "react-simple-maps";

const colorScale = scaleLinear()
  .domain([1, 155])
  .range(["#f8b9c6", "#d1153a"]);

/*
function getColorScale(value, min = 0, max = 100, mincolor = "#f8b9c6", maxcolor = "#d1153a") {
    return scaleLinear()
        .domain([min, max])
        .range([mincolor, maxcolor])(value);
}
*/

export default class Map extends React.Component {
    constructor(props) {
        super(props)
        this.toolTip = React.createRef()
        this.state = {
            data: undefined,
            selected: {
                name: '',
                value: 0
            },
            flagShow: false,
        }
        this.projection = this.projection.bind(this)
        this.handleHover.bind(this)
        this.handleOut.bind(this)
    }
    projection() {
        return geoTimes()
          .translate([500/2, 600/2])
          .scale(160)
    }
    handleOut() {
        this.setState({
            flagShow: false
        })
    }
    handleHover(evt) {
        var selected = evt.target.id;
        
        const result = this.props.data.filter((item) => {
            return item["Region Name"] === selected;
        })

        var svalue = 0;
        if(result.length > 0) {
            
            svalue = (result[0])?result[0]["Admitted PUI"]:result["Admitted PUI"];
            
            // Todo: Find way not using document.getElementById()
            var div = document.getElementById("map-anchor")
            var pos = div.getBoundingClientRect();
            
            this.toolTip.style.left = (evt.clientX - pos.left + 20)+'px';
            this.toolTip.style.top = (evt.clientY - pos.top + 20)+'px';
            
        }

        this.setState({
            selected: {
                name: selected,
                value: svalue
            },
            flagShow: true
        })



    }
    render() {

        const region_data = this.props.data;
        
        var minmax = [];
        for(var i = 0; i < region_data.length; i++) {
            const item = region_data[i];
            const value1 = parseInt(item["Admitted PUI"]);
            //const value2 = parseInt(item["Confirmed Case"]);
            if(i === 0) {
                minmax.push(value1);
                minmax.push(value1);
            } else {
                minmax[0] = (value1 < minmax[0])?value1:minmax[0];
                minmax[1] = (value1 > minmax[1])?value1:minmax[1];
            }
        }
        
        var legend_values = [];
        const minx = (minmax.length>0)?minmax[0]:0;
        const maxx = (minmax.length>0)?minmax[1]:100;
        const dx = maxx/4;
        for(var i = 0; i < 5; i++) {
            legend_values.push(i*dx)
        }

        const flagToolTip = (this.state.flagShow)?'block':'none';
        return (
            <>
            <div className="map-container">
                <div id="map-anchor" className="anchor">
                    <ComposableMap
                    width={400}
                    height={500}
                    projection={this.projection}
                    >
                    <ZoomableGroup 
                    center={[172, -28]} 
                    zoom={12}
                    disablePanning={true}
                    disableZooming={true}
                    >
                    <Geographies geography={ "/philippines-provinces.json" }>
                    {(geographies, projection) => geographies.map((geography, index) => {
                    
                    const provinceName = geography.properties.NAME_1;
                    const d = region_data.find((item) => item['Region Name'] === geography.properties.NAME_1);
                    const v = (typeof d !== 'undefined')?d['Admitted PUI']:0;
                    
                    return (<Geography
                        onMouseOver={() => this.handleHover(event)}
                        onMouseOut={() => this.handleOut(event)}
                        style={{
                            outline: 'none'
                        }}
                        id={provinceName}
                        key={ index }
                        geography={ geography }
                        projection={ projection }
                        fill={v?colorScale(v):'#CCC'}
                        />)
                    })}
                    </Geographies>
                    </ZoomableGroup>
                    </ComposableMap>

                    <div className="legend">
                        <p>Admitted PUI</p>
                        {
                        legend_values.map((item, index) => {
                            const color = colorScale(item);
                            const text = (index === 0)?(index + 1):Math.round(item);
                            return (
                                <div key={index} style={{
                                    background: `${color}`
                                }}><span>{ text }</span></div>
                            )
                        })
                        }
                    </div>
                    
                    <div className="tooltip" ref={el => this.toolTip = el}>
                        <p>
                            <strong>{ this.state.selected.name }</strong><br />
                            <span>Admitted PUI: { this.state.selected.value }</span>
                        </p>
                    </div>
                        
                </div>
            </div>
            <style jsx>
                {`
                .map-container {
                    position: relative;
                    background-color: white;
                }
                .anchor {
                    position: relative;
                    background-color: transparent;
                    width: 400px;
                    height: 500px;
                    margin: 0px auto;
                }
                .legend {
                    position: absolute;
                    left: 10px;
                    top: 20px;
                    width: 60px;
                    text-align: left;
                    z-index: 2;
                    color: #151b1e;
                }
                .legend p {
                    margin: 0px;
                    padding: 5px 0px;
                    font-size: 0.6em;
                    color: #151b1e;
                }
                .legend div {
                    padding: 2px 0px 2px 3px;
                    user-select: none;
                    width: 30px;
                    font-size: 0.5em;
                    color: #151b1e;
                }
                .tooltip {
                    background-color: #fcfcfc;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    border: 1px solid #96acb6;
                    box-shadow: 1px 1px rgba(94, 122, 135, 0.5);
                    border-radius: 3px;
                    z-index: 5;
                    display: ${flagToolTip}
                }
                .tooltip p {
                    padding: 5px;
                    margin: 0px;
                    font-size: 0.7em;
                }
                `}
            </style>
            </>
        )
    }    
}