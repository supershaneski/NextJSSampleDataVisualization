import React from 'react';
export default function RegionTable() {
    return (
        <>
        <h4>Region Breakdown</h4>
        <table>
            <thead>
                <tr>
                    <th>Region Name</th>
                    <th>Case</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>NCR</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>Bulacan</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Pampanga</td>
                    <td>5</td>
                </tr>
            </tbody>            
        </table>
        <style jsx>
            {`
            table {
                border-collapse: collapse;
                min-width: 50%;
            }
            td, th {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }
            tr:nth-child(even) {
                background-color: #dddddd;
            }
            td:last-child {
                text-align: center;
            }
            `}
        </style>
        </>
    )
}