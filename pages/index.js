import React, { Component } from 'react';
import KPITable from '../components/kpitable';
import ChartMap from '../components/chartmap';
import ChartPUI from '../components/chartpui';
import ChartTotal from '../components/charttotal';
import RegionTable from '../components/regiontable';
import HelpfulLinks from '../components/helpfullinks';

class Clock extends Component {
    constructor() {
        super()
        this.timer = null;
        this.state = {
            time: new Date()
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
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
            <p>{ this.state.time.toLocaleTimeString() }</p>
            <style jsx>
                {`
                p {
                    color: #ddd;
                }
                `}
            </style>
            </>
        )
    }
}

function Index() {

    const lastUpdate = new Date();

    return (
        <>
        <main>
            
            <header>
                <h1>Coronavirus Disease (COVID-19) Sample Tracker</h1>
                <em><small>
                <span>Last Updated:</span>&nbsp;
                <strong>{ lastUpdate.toUTCString() }</strong></small></em>
                <Clock />
            </header>

            <section id="kpi-container">
                <KPITable />
            </section>

            <section id="mapchart-container">
                <ChartMap />
            </section>

            <section id="puichart-container">
                <ChartPUI />
            </section>
            
            <section id="totalchart-container">
                <ChartTotal />
            </section>
            
            <section id="region-container">
                <RegionTable />
            </section>

            <Clock />
            <section id="links-container">
                <HelpfulLinks />
            </section>            
            
            <footer>
                Copyright &copy; 2020 All rights reserved
            </footer>

        </main>
        <style jsx>
            {`
            main {
                margin: 0px auto;
                width: 90%;
            }
            section {
                margin: 20px 0px;
            }
            @media only screen and (max-width:640px) {
                main {
                    width: 100%;
                }
            }
            `}
        </style>
        </>
    )
}
export default Index;