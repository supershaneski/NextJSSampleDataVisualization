import React from 'react';
import { VictoryLine, VictoryStack,
    VictoryScatter, VictoryBar, VictoryChart, 
    VictoryAxis, VictoryTheme } from 'victory';
import Legend from './legend';

export default class Bar extends React.Component {
    constructor(props) {
        super(props)
        this.container = React.createRef()
        this.state = {
            displayCount: 100
        }
    }

    handleSliderChange(evt) {
        this.setState({
            displayCount: evt.target.value
        })
    }

    render() {
        const legend_keys = this.props.data.length > 0?this.props.data['columns'].filter((item, index) => index > 0):[];
        
        let color_scale = [];
        const legend_data = legend_keys.map((key, index) => {
            const _index = index % this.props.colors.length;
            color_scale.push(this.props.colors[_index])
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
        
        const bar_data = legend_data.map((legend, legend_index) => {
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
            <div ref={el => this.container = el} className="bar-container">
            
            <div className="legend-container">
                <Legend data={legend_data} />
            </div>

            <VictoryChart
            domainPadding={20}
            theme={VictoryTheme.material}
            >

            <VictoryAxis
            style={{ 
                tickLabels: { fontSize: tickSize }
            }}
            tickValues={tickValues}
            tickFormat={tickFormats}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x}`)}
            />
            <VictoryStack
            colorScale={color_scale}
            >
            {
            bar_data.map((item, index) => {
                return (
                    <VictoryBar
                    key={index}
                    data={item.data}
                    x={"x"}
                    y={"y"}
                    />
                )
            })
            }
            </VictoryStack>
        
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
                .bar-container {
                    background-color: white;
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

Bar.defaultProps = {
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
