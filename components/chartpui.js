import React from 'react';
import { VictoryLine, VictoryStack,
    VictoryScatter, VictoryBar, VictoryChart, 
    VictoryAxis, VictoryTheme } from 'victory';
import Legend from '../components/legend';

export default function ChartPUI(props) {
    
    const tickValues = [
        "1/29",
        "1/30",
        "1/31",
        "2/1",
        "2/2",
        "2/3",
        "2/4",
        "2/5",
        "2/6",
        "2/7",
        "2/8"
    ];

    const data2014 = [
        {quarter: 1, earnings: 26},
        {quarter: 2, earnings: 27},
        {quarter: 3, earnings: 29},
        {quarter: 4, earnings: 31},
        {quarter: 5, earnings: 36},
        {quarter: 6, earnings: 52},
        {quarter: 7, earnings: 80},
        {quarter: 8, earnings: 105},
        {quarter: 9, earnings: 133},
        {quarter: 10, earnings: 178},
        {quarter: 11, earnings: 215} 
    ];
    
    const data2015 = [
        {quart: 1, earnings: 1},
        {quart: 2, earnings: 2},
        {quart: 3, earnings: 2},
        {quart: 4, earnings: 5},
        {quart: 5, earnings: 16},
        {quart: 6, earnings: 28},
        {quart: 7, earnings: 25},
        {quart: 8, earnings: 28},
        {quart: 9, earnings: 45},
        {quart: 10, earnings: 37},
        {quart: 11, earnings: 52}            
    ];
    
    return (
        <>
        <h4>Person Under Investigation (PUI) Daily Total</h4>
        <Legend data={[
            { text: "Daily Added PUI", color: "orange"},
            { text: "Total Accumulated PUI per day", color: "royalblue"}
        ]} />
        <div className="chart-container">
        <VictoryChart
            domainPadding={20}
            theme={VictoryTheme.material}            
            >
            <VictoryAxis
            tickValues={tickValues}
            style={{ 
                ticks: {stroke: "grey", size: 5},
                tickLabels: {fontSize: 8, padding: 5}
            }}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x}`)}
            />
            <VictoryStack
                colorScale={["royalblue", "orange"]}
                >                    
                <VictoryBar
                data={data2014}
                x={"quarter"}
                y={"earnings"}
                />
                <VictoryBar
                data={data2015}
                x={"quart"}
                y={"earnings"}
                />
                </VictoryStack>                
        </VictoryChart>
        </div>
        <style jsx>
        {`
        .chart-container {
            background-color: white;                        
        }
        `}
        </style>
        </>
    )
}