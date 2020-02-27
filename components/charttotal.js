import React from 'react';
import { VictoryLine, VictoryStack,
    VictoryScatter, VictoryBar, VictoryChart, 
    VictoryAxis, VictoryTheme } from 'victory';
import Legend from '../components/legend';

export default function ChartTotal(props) {
    
    const master_data = [
        { day: 1, confirmed: 1, death: 0, recovered: 0, admitted: 6, released: 0 },
        { day: 2, confirmed: 2, death: 1, recovered: 1, admitted: 12, released: 8 },
        { day: 3, confirmed: 3, death: 1, recovered: 2, admitted: 8, released: 6 },
        { day: 4, confirmed: 3, death: 1, recovered: 2, admitted: 17, released: 5 },
        { day: 5, confirmed: 3, death: 1, recovered: 2, admitted: 23, released: 11 },
        { day: 6, confirmed: 4, death: 1, recovered: 5, admitted: 12, released: 6 },
        { day: 7, confirmed: 4, death: 1, recovered: 7, admitted: 5, released: 9 },
        { day: 8, confirmed: 4, death: 1, recovered: 16, admitted: 14, released: 3 },
        { day: 9, confirmed: 5, death: 1, recovered: 19, admitted: 17, released: 6 },
        { day: 10, confirmed: 5, death: 1, recovered: 23, admitted: 7, released: 7 },
        { day: 11, confirmed: 6, death: 1, recovered: 25, admitted: 9, released: 4 },
        { day: 12, confirmed: 7, death: 1, recovered: 26, admitted: 12, released: 11 },
    ]

    const data_colors = [
        "#f00",
        "#22fad1",
        "#ee22ff",
        "#a23ddf",
        "#ccee66"
    ];

    const list_data = [];
    const confirmed_data = master_data.map((item, index) => {
        return {
            x: (index),
            y: item.confirmed
        }
    })
    list_data.push({
        data: confirmed_data
    })

    const death_data = master_data.map((item, index) => {
        return {
            x: (index),
            y: item.death
        }
    })
    list_data.push({
        data: death_data
    })

    const recovered_data = master_data.map((item, index) => {
        return {
            x: (index),
            y: item.recovered
        }
    })
    list_data.push({
        data: recovered_data
    })

    const admitted_data = master_data.map((item, index) => {
        return {
            x: (index),
            y: item.admitted
        }
    })
    list_data.push({
        data: admitted_data
    })

    const released_data = master_data.map((item, index) => {
        return {
            x: (index),
            y: item.released
        }
    })
    list_data.push({
        data: released_data
    })
    
    const tick_values = [];
    const tick_format = [];
    const start_date = '2020/01/29';
    master_data.forEach((item, index) => {
        tick_values.push(index);
        const date = new Date(start_date)
        date.setDate(date.getDate() + index)
        tick_format.push(
            date.toLocaleString("jp-JP").split(',')[0].replace('/2020','').replace('2020/','')
        )
    })

    return (
        <>
        <h4>Outbreak Spread Trend</h4>
        <Legend data={[
            { text: "Confirmed", color: data_colors[0]},
            { text: "Death", color: data_colors[1]},
            { text: "Recovered", color: data_colors[2]},
            { text: "PUI Admitted", color: data_colors[3]},
            { text: "PUI Released", color: data_colors[4]}
        ]} />

        <div className="chart-container">
        <VictoryChart
        theme={VictoryTheme.material}
        >
            <VictoryAxis
            tickValues={tick_values}
            tickFormat={tick_format}
            style={{ 
                ticks: {stroke: "grey", size: 5},
                tickLabels: {fontSize: 9, padding: 5}
            }}
            />

            <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x}`)}
            />
            
            {
                list_data.map((item, index) => {
                    return <VictoryLine
                    key={index}
                    style={{
                    data: { stroke: data_colors[index] },
                    parent: { border: "1px solid #ccc"}
                    }}
                    data={ item.data }
                    />
                })
            }
        </VictoryChart>
        </div>
        </>
    )
}