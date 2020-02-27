import React from 'react';
import Link from 'next/link';
import { VictoryLine, VictoryStack,
    VictoryScatter, VictoryBar, VictoryChart, 
    VictoryAxis, VictoryTheme } from 'victory';

class Clock extends React.Component {
    constructor() {
        super()
        this.timer = null;
        this.state = {
            time: new Date()
        }
    }
    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <>
            <span>{ this.state.time.toLocaleTimeString() }</span>
            <style jsx>
                {`
                span {
                    color: #dedede;
                }
                `}
            </style>
            </>
        )
    }
}

class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //
    }
    render() {
        const data = [
            {quarter: 1, earnings: 1},
            {quarter: 2, earnings: 5},
            {quarter: 3, earnings: 10},
            {quarter: 4, earnings: 3}
        ];

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
            <main>
                <h1>Novel Coronavirus Case Tracker</h1>
                <Clock />
                <div className="summary">
                    <div className="panel">
                        <section>
                        <h4>Death</h4>
                        <p>1</p>
                        </section>                        
                    </div>
                    <div className="panel">
                        <section>
                        <h4>Confirmed</h4>
                        <p>3</p>
                        </section>                        
                    </div>
                    <div className="panel">
                        <section>
                        <h4>Tested Negative</h4>
                        <p>524</p>
                        </section>                        
                    </div>
                    <div className="panel">
                        <section>
                        <h4>Pending Result</h4>
                        <p>42</p>   
                        </section>                        
                    </div>
                </div>
                <div className="chart-total">
                    <VictoryChart
                    theme={VictoryTheme.material} 
                    domainPadding={20}>
                        <VictoryAxis
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={["January", "February", "March", "April"]}
                        />
                        <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => (`${x}`)}
                        />
                        <VictoryBar 
                        data={data}
                        x={`quarter`}
                        y={`earnings`} />          
                    </VictoryChart>
                </div>
                <Clock />

                <div className="chart-total">
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

                <div className="chart-total">
                <VictoryChart
                domainPadding={10}
                theme={VictoryTheme.material}
                >
                <VictoryLine
                    style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc"}
                    }}
                    data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 }
                    ]}
                />

                <VictoryLine
                    style={{
                    data: { stroke: "#22fad1" },
                    parent: { border: "1px solid #ccc"}
                    }}
                    data={[
                    { x: 1, y: 1 },
                    { x: 2, y: 5 },
                    { x: 3, y: 3 },
                    { x: 4, y: 2 },
                    { x: 5, y: 9 }
                    ]}
                />

                <VictoryLine
                    style={{
                    data: { stroke: "#ee22ff" },
                    parent: { border: "1px solid #ccc"}
                    }}
                    data={[
                    { x: 1, y: 0 },
                    { x: 2, y: 1 },
                    { x: 3, y: 2 },
                    { x: 4, y: 5 },
                    { x: 5, y: 3 }
                    ]}
                />

                </VictoryChart>
                </div>

                <Clock />
                <div className="news">
                    <h4>News</h4>
                    <ul>
                        <li><Link as="/" href="/"><a>
                        DOH issues Press Release: DOH Updates on M/V Diamond Princess Repatriation Plans
                        </a></Link></li>
                        
                        <li><Link as="/" href="/"><a>
                        DOH updates the COVID-19 Case Tracker as of 24 February 2020
                        </a></Link></li>
                        
                        <li><Link as="/" href="/"><a>
                        DOH updates the COVID-19 Case Tracker as of 22 February 2020
                        </a></Link></li>
                    </ul>
                </div>
            </main>            
            <style jsx>
                {`
                main {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
                .summary {
                    display: table;
                    width: 100%;
                    
                }
                .summary section {
                    background-color: #fff;
                    border: 1px solid #000;
                    margin: 10px;
                }
                .summary .panel {
                    width: calc((100%)/4);
                    text-align: center;
                    display: inline-block;
                    vertical-align: top;
                }

                .chart-total {
                    width: 100%;
                }
                `}
            </style>
            </>
        )
    }
}

export default Index;