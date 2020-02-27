import React from 'react';
import { VictoryLine, VictoryStack,
    VictoryScatter, VictoryBar, VictoryChart, 
    VictoryAxis, VictoryTheme } from 'victory';

export default function ChartTotal(props) {
    
    const array_confirmed = [
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 1, y: 3 },
        { x: 1, y: 4 },
        { x: 1, y: 5 },
        { x: 1, y: 6 },
        { x: 1, y: 7 } 
    ];

    return (
        <>
        <h4>Outbreak Spread Trend</h4>
        <div className="chart-container">
        <VictoryChart
        theme={VictoryTheme.material}
        >
            <VictoryLine
                style={{
                data: { stroke: "#f00" },
                parent: { border: "1px solid #ccc"}
                }}
                data={[
                { x: 1, y: 0 },
                { x: 2, y: 1 },
                { x: 3, y: 1 },
                { x: 4, y: 1 },
                { x: 5, y: 1 }
                ]}
            />
            <VictoryLine
                style={{
                data: { stroke: "#22fad1" },
                parent: { border: "1px solid #ccc"}
                }}
                data={[
                { x: 1, y: 2 },
                { x: 2, y: 2 },
                { x: 3, y: 2 },
                { x: 4, y: 3 },
                { x: 5, y: 3 }
                ]}
            />
            <VictoryLine
                style={{
                data: { stroke: "#ee22ff" },
                parent: { border: "1px solid #ccc"}
                }}
                data={[
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 3, y: 1 },
                { x: 4, y: 1 },
                { x: 5, y: 2 }
                ]}
            />
            <VictoryLine
                style={{
                data: { stroke: "#a23ddf" },
                parent: { border: "1px solid #ccc"}
                }}
                data={[
                { x: 1, y: 12 },
                { x: 2, y: 18 },
                { x: 3, y: 11 },
                { x: 4, y: 27 },
                { x: 5, y: 31 }
                ]}
            />
            <VictoryLine
                style={{
                data: { stroke: "#ccee66" },
                parent: { border: "1px solid #ccc"}
                }}
                data={[
                { x: 1, y: 5 },
                { x: 2, y: 13 },
                { x: 3, y: 7 },
                { x: 4, y: 8 },
                { x: 5, y: 5 }
                ]}
            />
        </VictoryChart>
        </div>
        </>
    )
}