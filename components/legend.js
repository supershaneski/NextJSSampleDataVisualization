export default function Legend(props) {
    const legend_data = props.data;
    return (
        <>
        <div className="legend-container">
            {
                legend_data.map((item, index) => {
                    return (
                        <div key={index}>
                        <span style={{
                            color: `${item.color}`
                        }}>▉</span>&nbsp;
                        <span>{ item.text }</span>
                        </div>
                    )
                })
            }
        </div>
        <style jsx>
        {`
        .legend-container {
            padding-top: 20px;
        }
        .legend-container div {
            display: inline-block;
            margin-right: 10px;
            padding-right: 5px;
        }
        `}
        </style>
        </>
    )
}