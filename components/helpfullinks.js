import React from 'react';
export default function HelpfulLinks() {
    return (
        <>
        <h4>Helpful Links</h4>
        <ul>
            <li>
                <a href="/">
                DOH updates the COVID-19 Case Tracker as of 26 February 2020
                </a>
            </li>
            <li>
                <a href="/">
                DOH issues Press Release: DOH Updates on M/V Diamond Princess Repatriation Plans
                </a>
            </li>
            <li>
                <a href="/">
                DOH updates the COVID-19 Case Tracker as of 25 February 2020
                </a>
            </li>
            <li>
                <a href="/">
                DOH updates the COVID-19 Case Tracker as of 24 February 2020
                </a>
            </li>
            <li>
                <a href="/">
                DOH issues Press Release: DOH Updates on M/V Diamond Princess Repatriation Plans
                </a>
            </li>
        </ul>
        <style jsx>
            {`
            ul {
                list-style-type: square;
            }
            li {
                margin: 5px 0px;
            }
            `}
        </style>
        </>
    )
}