import React from 'react';
import { VictoryLine, VictoryStack,
    VictoryScatter, VictoryBar, VictoryChart, 
    VictoryAxis, VictoryTheme } from 'victory';

export default function ChartPUI(props) {
    
    const tickValues = [
        "29",
        "30",
        "31",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
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
    {quarter: 1, earnings: 1},
    {quarter: 2, earnings: 2},
    {quarter: 3, earnings: 2},
    {quarter: 4, earnings: 5},
    {quarter: 5, earnings: 16},
    {quarter: 6, earnings: 28},
    {quarter: 7, earnings: 25},
    {quarter: 8, earnings: 28},
    {quarter: 9, earnings: 45},
    {quarter: 10, earnings: 37},
    {quarter: 11, earnings: 52}            
  ];
    
    return (
        <>
        <h4>Person Under Investigation (PUI) Daily Total</h4>
        <div className="chart-container">
        <VictoryChart
            domainPadding={20}
            theme={VictoryTheme.material}
            >
            <VictoryAxis
                tickValues={tickValues}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x}`)}
            />
            <VictoryStack>                    
                <VictoryBar
                data={data2014}
                x={"quarter"}
                y={"earnings"}
                />
                <VictoryBar
                data={data2015}
                x={"quarter"}
                y={"earnings"}
                />
                </VictoryStack>                
        </VictoryChart>
        </div>
        </>
    )
}