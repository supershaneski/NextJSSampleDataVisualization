export default function Table(props) {
    const data = props.data;
    return (
        <>
        <div className="table-container">
            
            <table>
                {
                    data.length > 0 &&
                    <thead>
                        <tr>
                            {
                                data['columns'].map((item, index) => {
                                    return (
                                        <th key={ index }>{ item }</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                }
                {
                    data.length > 0 &&
                    <tbody>
                        {
                            data.sort((a,b) => {
                                if(parseInt(a['Admitted PUI']) < parseInt(b['Admitted PUI'])) return 1;
                                if(parseInt(a['Admitted PUI']) > parseInt(b['Admitted PUI'])) return -1;
                                return 0;
                            }).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{ item['Region Name'] }</td>
                                        <td>{ item['Admitted PUI'] }</td>
                                        <td>{ item['Confirmed Case'] }</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td><strong>Total</strong></td>
                            {
                                props.data.filter((item, index) => index > 0).map((item) => {
                                    return [ 
                                        parseInt(item['Admitted PUI']), 
                                        parseInt(item['Confirmed Case']) 
                                    ]
                                }).reduce((a, b) => {
                                    return [
                                        a[0] + b[0],
                                        a[1] + b[1]
                                    ]
                                },[0,0]).map((item, index) => {
                                    return (
                                        <td key={index}>{ item }</td>
                                    )
                                })
                            }
                        </tr>
                    </tbody>
                }                    
            </table>
        
        </div>
        <style jsx>
            {`
            .table-container {
                position: relative;
                background-color: white;
            }
            table {
                background-color: white;
                border-collapse: collapse;
                margin: 0px auto;
            }
            th, td {
                font-size: 0.9em;
            }
            th {
                text-align: center;
                padding: 5px 5px;
                color: #2a363c;
            }
            tr:nth-child(even) {
                background-color: #e1e7ea;
            }
            td {
                padding: 5px 5px;
                text-align: center;
                color: #455a64;
            }
            th:first-child, td:first-child {
                text-align: left;
            }
            `}
        </style>
        </>
    )
}