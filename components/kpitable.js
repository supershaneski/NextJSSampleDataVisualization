import React from 'react';

export default function KPITable(props) {
    
    const data = [
        {quarter: 1, earnings: 1},
        {quarter: 2, earnings: 5},
        {quarter: 3, earnings: 10},
        {quarter: 4, earnings: 3}
    ];

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Admitted PUI</th>
                    <th>Discharged PUI</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Death</th>
                </tr>
            </thead>
            <tbody>
                <tr className="kpi-metrics">
                    <td id="kpi-admitted">101</td>
                    <td id="kpi-discharged">510</td>
                    <td id="kpi-confirmed">3</td>
                    <td id="kpi-recovered">2</td>
                    <td id="kpi-death">1</td>
                </tr>
            </tbody>               
        </table>
        <style jsx>
            {`
            table {
                width: 100%;
                border-collapse: collapse;
            }
            th {
                width: 20%;
                vertical-align: top;
            }
            td {
                text-align: center;
                padding: 10px 0px;
            }
            `}
        </style>
        </>
    )
}