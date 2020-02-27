import React from 'react';
export default function RegionTable() {
    
    const region_data = [
        { name: "CAR", admitted: 2, confirmed: 0 },
        { name: "Ilocos", admitted: 1, confirmed: 0 },
        { name: "Cagayan Valley", admitted: 1, confirmed: 0 },
        { name: "Central Luzon", admitted: 2, confirmed: 0 },
        { name: "NCR", admitted: 86, confirmed: 0 },
        { name: "CALABARZON", admitted: 4, confirmed: 0 },
        { name: "MIMAROPA", admitted: 0, confirmed: 0 },
        { name: "Bicol", admitted: 0, confirmed: 0 },
        { name: "Western Visayas", admitted: 0, confirmed: 0 },
        { name: "Eastern Visayas", admitted: 0, confirmed: 0 },
        { name: "Central Visayas", admitted: 3, confirmed: 0 },
        { name: "Caraga", admitted: 0, confirmed: 0 },
        { name: "Northern Mindanao", admitted: 1, confirmed: 0 },
        { name: "Davao", admitted: 0, confirmed: 0 },
        { name: "BARMM", admitted: 0, confirmed: 0 },
        { name: "SOCCSKSARGEN", admitted: 1, confirmed: 0 },
    ];
    region_data.sort((a, b) => {
        if (a.admitted < b.admitted) {
            return 1;
        }
        if (a.admitted > b.admitted) {
            return -1;
        }
        return 0;
    })

    let total_admitted = 0;
    let total_confirmed = 0;
    region_data.forEach((item) => {
        total_admitted += item.admitted;
        total_confirmed += item.confirmed;
    })

    const lastUpdate = new Date();

    return (
        <>
        <h4>PUI Region Breakdown</h4>
        <p>
        <em><small>
        <span>&#42; as of </span>&nbsp;
        { lastUpdate.toUTCString() }</small></em>
        </p>

        <table>
            <thead>
                <tr>
                    <th>Region Name</th>
                    <th>Admitted PUI</th>
                    <th>Confirmed Case</th>
                </tr>
            </thead>
            <tbody>
                {
                    region_data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{ item.name }</td>
                                <td>{ item.admitted }</td>
                                <td>{ item.confirmed }</td>
                            </tr>
                        )
                    })
                }
                <tr className="total">
                    <td>Total</td>
                    <td>{ total_admitted }</td>
                    <td>{ total_confirmed }</td>
                </tr>
            </tbody>            
        </table>
        <style jsx>
            {`
            table {
                border-collapse: collapse;
                min-width: 80%;
            }
            td, th {
                border: 1px solid #dddddd;
                text-align: center;
                padding: 8px;
            }
            tr:nth-child(even) {
                background-color: #dddddd;
            }
            td:first-child {
                text-align: left;
            }
            tr.total td {
                font-weight: bold;
            }
            `}
        </style>
        </>
    )
}