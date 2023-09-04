import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import MainData from '../../public/assets/XRP-USD.json';  // Assuming this is correct
import styles from '../../styles/chart.module.css';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => { 
    const margin = { top: 70, right: 60, bottom: 50, left: 80 };
    const width = 1058;
    const height = 880;

    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    // Create SVG element instead of canvas for using D3's axis methods
    const svg = d3.select(chartRef.current)
                  .append('svg')
                  .attr('width', width + margin.left + margin.right)
                  .attr('height', height + margin.top + margin.bottom)
                  .append('g')
                  .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Load and process the data 
    // Assuming MainData is an array, you can directly use it
    const data = MainData;

    // Parse the date and convert the close to a number 
    const parseDate = d3.timeParse("%Y-%m-%d");
    data.forEach(d => { 
      d.Date = parseDate(d.Date);
      d.Close = +d.Close;
    });

    // Set the domains for x and y scales 
    x.domain(d3.extent(data, d => d.Date));
    y.domain([0, d3.max(data, d => d.Close)]);

    // Add the x-axis
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    // Move the y-axis to the right
    svg.append("g")
      .attr("transform", `translate(${width}, 0)`)
      .call(d3.axisRight(y).tickFormat(d => `$${d.toFixed(2)}`));
    

      const line = d3.line()
      .x(d => x(d.Date))
      .y(d => y(d.Close))

        //Area chart 
        const area = d3.area() 
        .x(d => x(d.Date))
        .y0(height)
        .y1(d => y(d.Close))

        //Add area path
        svg.append("path")
            .datum(data)
            .attr("class", "area")
            .attr("d", area)
            .style("fill", "#85bb65")
            .style("opacity", .5)

        //Add the line path 

        svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "#85bb65")
        .attr("stroke-width", 1)
        .attr("d", line)






  }, []);

  return (
    <div className="chart-container">
      <div ref={chartRef} className="candlestick_chart" />
    </div>
  );
};

export default LineChart;
