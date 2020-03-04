import React from 'react';
import { csv } from "d3-fetch";
import Bar from '../components/bar';
import Line from '../components/line';
import Table from '../components/table';
import Map from '../components/map';

const Header = () => {
    const siteTitle = process.env.siteTitle;
    return (
        <>
        <header>
            <h1 className="lightest">{ siteTitle }</h1>
        </header>
        <style jsx>
            {`
            header {
                backgroundColor: transparent;
                text-align: center;
            }
            `}
        </style>
        </>
    )
}

const Footer = () => {
    return (
        <>
        <footer>
            <small>
                <span className="lighter">Copyright &copy; 2020</span>&nbsp;
                <span className="lighter">All rights reserved</span>
            </small>
        </footer>
        <style jsx>
            {`
                footer {
                    text-align: center;
                    padding: 10px 0px;
                    font-size: 0.8em;
                }
            `}
        </style>
        </>
    )
}

export default class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            chart_data: [],
            region_data: []
        }
    }
    
    componentDidMount() {
        csv(`http://localhost:3000/chart-data.csv`).then(data => {
            this.setState({
                chart_data: data
            })
        });
        csv(`http://localhost:3000/region-data.csv`).then(data => {
            this.setState({
                region_data: data
            })
        });
    }

    render() {
        return (
            <>
            <Header />
            <main>
                
                <section>
                    <h4>Map Chart</h4>
                    <Map data={this.state.region_data} />
                </section>
                
                <section>
                    <h4>Table Chart</h4>
                    <Table data={this.state.region_data} />
                </section>

                <section>
                    <h4>Bar Chart</h4>
                    <Bar 
                        data={this.state.chart_data} 
                        colors={['royalblue', 'crimson']} 
                    />
                </section>
                
                <section>
                    <h4>Line Chart</h4>
                    <Line data={this.state.chart_data} colors={['royalblue', 'crimson']} />
                </section>

            </main>            
            <Footer />
            <style jsx>
                {`
                main {
                    background-color: #fff;
                    border-radius: 16px;
                    overflow: hidden;
                }
                section {
                    position: relative;
                    width: 80%;
                    margin: 0px auto;
                    padding-bottom: 24px;
                }
                `}
            </style>
            </>
        )
    }
}