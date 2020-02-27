import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";

const geoUrl =
  "http://localhost:3000/world-110m.json";

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);

const data_array = [];
for(var i = 0; i < 10; i++) {
  data_array.push({
    index: i,
    data: 'abc'+((i < 10)?'000'+i:'00'+i)
  })
}

const ChartMap = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    csv(`http://localhost:3000/vulnerability.csv`).then(data => {
      setData(data);
    });
  }, []);

  return (
    <>
    <h4>Outbreak Map</h4>
    <section>
      <ComposableMap>
        <ZoomableGroup>
        <Geographies geography={ "/world-50m.json" }>
            {(geographies, projection) => geographies.map(geography => {
              const d = data.find(s => s.ISO3 === geography.properties.ISO_A3);
              return (<Geography
                key={ geography.id }
                geography={ geography }
                projection={ projection }
                fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
                />)
            })}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </section>
    <style jsx>
    {`
    section {
      width: 90%;
      overflow: hidden;
    }
    `}
    </style>
    </>
  )

};

export default ChartMap;
