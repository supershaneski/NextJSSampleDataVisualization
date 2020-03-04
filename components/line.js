import React from 'react';
import { VictoryLine, VictoryStack,
    VictoryScatter, VictoryBar, VictoryChart, 
    VictoryAxis, VictoryTheme } from 'victory';
import Legend from './legend';

export default class Line extends React.Component {
    constructor(props) {
        super(props)
        this.container = React.createRef()
        this.state = {
            displayCount: 100
        }
    }
    
    componentDidMount() {
        //this.resizeContainer();
        //window.addEventListener("resize", this.resizeContainer.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeContainer.bind(this));
    }

    resizeContainer() {
        if(!this.container) return;        
        //const {offsetWidth, offsetHeight} = this.container;
    }

    handleSliderChange(evt) {
        this.setState({
            displayCount: evt.target.value
        })
    }

    render() {
        
        const legend_keys = this.props.data.length > 0?this.props.data['columns'].filter((item, index) => index > 0):[];
        const legend_data = legend_keys.map((key, index) => {
            const _index = index % this.props.colors.length;
            return {
                text: key,
                color: this.props.colors[_index]
            }
        })

        var max_count =  Math.floor((this.props.data.length - 1) * this.state.displayCount/100);
        max_count = (max_count < 2)?2:max_count;

        let tickValues = [];
        let tickFormats = [];

        const tickSize = (max_count < 8)?12:8;
        const tickMaster = this.props.data.map((vitem, vindex) => {
            return [
                vindex + 1,
                vitem.Dates
            ]
        })

        const delta = (max_count < 10)?1:(1 + Math.floor(max_count/10));
        if(tickMaster.length > 0) {
            for(var i = 0; i < max_count; i=i+delta) {
                tickValues.push(i + 1)
                tickFormats.push(tickMaster[i][1])
            }
        }

        const line_data = legend_data.map((legend, legend_index) => {
            const items = this.props.data.filter((aitem, aindex) => aindex < max_count)
                .map((item, index) => {
                    return {
                        x: index + 1,
                        y: parseInt(item[legend.text])
                    }
                })
            return {
                key: legend.text,
                color: legend.color,
                data: items
            }
        })
        
        return (
            <>
            <div ref={el => this.container = el} className="line-container">
                
                <div className="legend-container">
                    <Legend data={legend_data} />
                </div>

                <VictoryChart
                    theme={VictoryTheme.material}
                >

                    <VictoryAxis
                    tickValues={tickValues}
                    tickFormat={tickFormats}
                    style={{ 
                        ticks: {stroke: "grey", size: 5},
                        tickLabels: {fontSize: tickSize, padding: 5}
                    }}
                    />
        
                    <VictoryAxis
                    dependentAxis
                    tickFormat={(y) => (`${y}`)}
                    />

                    {
                        line_data.map((item, index) => {
                            return (
                                <VictoryLine
                                key={index}
                                style={{
                                    data: { 
                                        stroke: item.color,
                                        strokeWidth: 1
                                    },
                                    parent: { 
                                        border: "1px solid #ccc"
                                    }
                                }}
                                data={ item.data }
                                />
                            )
                        })
                    }
                </VictoryChart>
                
                <div className="slider-container">
                    <input type="range"
                    onChange={this.handleSliderChange.bind(this)}
                    min="1" 
                    max="100" 
                    value={this.state.displayCount} className="slider" />
                </div>

            </div>
            <style jsx>
                {`
                div.line-container {
                    background-color: white;
                    position: relative;
                    width: 100%;
                }
                div.legend-container {
                    position: relative;
                    width: 80%;
                    margin-left: 15%;
                }
                div.slider-container {
                    position: relative;
                    width: 80%;
                    margin-left: 10%;
                }
                .slider {
                    width: 100%;
                }
                `}
            </style>
            </>
        )
    }
}

Line.defaultProps = {
    data: [],
    colors:[
        'salmon',
        'forestgreen',
        'cyan',
        'yellow',
        'crimson',
        'royalblue',
        'chartreuse',
        'magenta',
        'indigo'
    ]
}