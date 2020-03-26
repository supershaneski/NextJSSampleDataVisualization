import React from 'react';

class Legend extends React.Component {
    constructor(props) {
        super(props)
        this.container = React.createRef()
        this.state = {
            textSize: 12
        }
    }
    
    componentDidMount() {
        //this.resizeContainer();
        //window.addEventListener("resize", this.resizeContainer.bind(this));
    }
    
    resizeContainer() {
        if(!this.container) return;
        const width = this.container.offsetWidth;
        const size = Math.round(12 * width/500);
        this.setState({
            textSize: size
        })
    }
    render() {
        return (
            <>
            <div ref={el => this.container = el} className="legend-container">
                <ul>
                    {
                        this.props.data.map((item, index) => {
                            let itemColor = (item.color)?item.color:'gray';
                            return (
                                <li key={index}>
                                    <div className="legend-item">
                                        <span 
                                        style={{
                                            color: `${itemColor}`
                                        }}>▉</span>&nbsp;
                                        <span>{ item.text }</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <style jsx>
                {`
                div.legend-container {
                    background-color: trasparent;
                }
                ul {
                    list-style-type: none;
                    margin: 0px;
                    padding: 0px;
                }
                li {
                    display: inline-block;
                    margin: 0px;
                    min-width: 100px;
                }
                .legend-item {
                    margin: 2px;
                    padding-right: 5px;
                    width: 100%;
                }
                span {
                    font-family: 'Roboto','Helvetica Neue', Helvetica, sans-serif;
                    font-size: ${this.state.textSize}px;
                    color: #455A64;
                }
                `}
            </style>
            </>
        )
    }
}

Legend.defaultProps = {
    data: [],
}

export default Legend;