import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import MainData from '../../public/assets/XRP-USD.json';
import styles from '../../styles/chart.module.css'

const CandlestickChart = () => {
  const chartRef = useRef(null);
  const [hoverData, setHoverData] = useState({High: null, Low: null, Open: null, Close: null});

  const [lineDrawingEnabled, setLineDrawingEnabled] = useState(false);

  const enableLineDrawing = () => {
    setLineDrawingEnabled(!lineDrawingEnabled);
  };
  
  const drag = d3.drag()
  .on('drag', function(event) {
    d3.select(this).attr('y1', event.y).attr('y2', event.y);
  });


  useEffect(() => {
    if (chartRef.current) {
      // Load data
      const ticker = MainData.map(d => ({
        ...d,
        Date: new Date(d.Date),
        Open: +d.Open,
        High: +d.High,
        Low: +d.Low,
        Close: +d.Close,
      }));

      // Declare the chart dimensions and margins.
      const width = 928;
      const height =880;
      const marginTop = 20;
      const marginRight = 30;
      const marginBottom = 30;
      const marginLeft = 40;
      const totalCandlesticks = ticker.length;
     const totalAvailableWidth = width - marginLeft - marginRight;
     const candleWidth = totalAvailableWidth / totalCandlesticks * 0.8; // 80% width for the candlestick
      const gap = totalAvailableWidth / totalCandlesticks * 0.2; // 20% width for the gap


      // Declare the positional encodings.
      const x = d3.scaleTime()
        .domain(d3.extent(ticker, d => d.Date))
        .range([marginLeft, width - marginRight]);

      const y = d3.scaleLinear()
        .domain([d3.min(ticker, d => d.Low), d3.max(ticker, d => d.High)])
        .rangeRound([height - marginBottom, marginTop])
        .clamp(true)

      // Create the SVG container.
      const svg = d3.select(chartRef.current)
        .append("svg")
        .attr("viewBox", [0, 0, width, height]);

      const xAxis = d3.axisBottom(x);
      const yAxis = d3.axisRight(y);

      const xAxisGroup = svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis);

      const yAxisGroup = svg.append("g")
        .attr("transform", `translate(${width - marginRight},0)`)
        .call(yAxis);
// ...Your previous code up to yAxisGroup is fine.

// Create a group for each data point
const candleGroups = svg.selectAll("g.candle")
  .data(ticker)
  .enter()
  .append("g")
  .attr("class", "candle")
  .attr("transform", d => `translate(${x(d.Date)},0)`);



// Add rectangles (bodies) to each group
candleGroups.append("rect")
  .attr("y", d => y(Math.max(d.Open, d.Close)))
  .attr("height", d => Math.abs(y(d.Open) - y(d.Close)))
  .attr("width", candleWidth)
  .attr("fill", d => d.Open > d.Close ? "red" : "green");

  // Create lines for the crosshair
const crosshairX = svg.append("line")
.attr("class", "crosshair")
.attr("stroke", "black")
.attr("stroke-width", 1)
.attr("stroke-dasharray", "5,5");

const crosshairY = svg.append("line")
.attr("class", "crosshair")
.attr("stroke", "black")
.attr("stroke-width", 1)
.attr("stroke-dasharray", "5,5");

// Create a "listening" rectangle
const listeningRect = svg.append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("opacity", 0);  // it's invisible

// Attach event listener
listeningRect.on("mousemove", function (event) {
  // Get mouse coordinates
  const [mx, my] = d3.pointer(event);

  // Convert to data space
  const date = x.invert(mx);
  const price = y.invert(my);

  // Update the crosshair lines
  crosshairX.attr("x1", mx).attr("y1", 0).attr("x2", mx).attr("y2", height);
  crosshairY.attr("x1", 0).attr("y1", my).attr("x2", width).attr("y2", my);


  // Find  closest data point to the mouse cursor
 
  // Find the closest data point to the mouse cursor
  const bisectDate = d3.bisector(d => d.Date).left;
  const i = bisectDate(ticker, date, 1);
  const d0 = ticker[i - 1];
  const d1 = ticker[i];

  let closestData;

  if (d0 && d1) {
    closestData = date - d0.Date > d1.Date - date ? d1 : d0;
  } else if (d0) {
    closestData = d0;
  } else if (d1) {
    closestData = d1;
  }

  // Update the hoverData state only if closestData is defined
  if (closestData) {
    setHoverData({
      Open: closestData.Open,
      High: closestData.High,
      Low: closestData.Low,
      Close: closestData.Close
    });
  }


});

listeningRect.on("mouseleave", function () {
  crosshairX.attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 0);
  crosshairY.attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 0);
});

// Inside your useEffect
listeningRect.on('click', function(event) {
  if (lineDrawingEnabled) {
    const [mx, my] = d3.pointer(event);
    const newLine = svg.append('line')
    .attr('class', 'draggable-line')  // <-- Add this class
    .attr('x1', marginLeft)
    .attr('x2', width - marginRight)
    .attr('y1', my)
    .attr('y2', my)
    .attr('stroke', 'red')
    .attr('stroke-width', 2);
  

    // Add drag behavior to the new line
    newLine.call(drag);
  }
});








// Initialize zoom
const zoom = d3.zoom()
  .scaleExtent([0.5, 32])
  .translateExtent([[marginLeft, -Infinity], [width - marginRight, Infinity]])
  .on("zoom", zoomed);

svg.call(zoom); // This is important

// August 27 Zoom function
function zoomed({ transform }) {
  const zx = transform.rescaleX(x);  // Rescale the x-axis
  const zy = transform.rescaleY(y);  // Rescale the y-axis

  // Update the x-axis and y-axis with new scales
  xAxisGroup.call(xAxis.scale(zx));
  yAxisGroup.call(yAxis.scale(zy));

  // Update the position of the candlesticks.
  candleGroups.attr("transform", d => `translate(${zx(d.Date)}, 0)`);

  // Calculate new candle width based on zoom factor
  const visibleRange = zx.domain();
  const filteredData = ticker.filter(d => d.Date >= visibleRange[0] && d.Date <= visibleRange[1]);
  const newCandleWidth = Math.max(1, (width - marginLeft - marginRight) / filteredData.length * 0.8);

  // Update candlestick rectangle dimensions
  candleGroups.selectAll("rect")
    .attr("width", newCandleWidth)
    .attr("y", d => zy(Math.max(d.Open, d.Close)))
    .attr("height", d => Math.abs(zy(d.Open) - zy(d.Close)));


  
  // Only select lines that are intended to be draggable horizontal lines
  svg.selectAll('line.draggable-line')
    .attr('y1', d => transform.applyY(d.y))
    .attr('y2', d => transform.applyY(d.y));;

}









    }
  }, []);



  return (

    <div className = "chart-container">

        <div className = "valuesWrapper">
          <div className = "valuesContainer">
        <span className = "values">H {hoverData.High}</span>
                    <span className = "values">L {hoverData.Low}</span>
                    <span className = "values">O {hoverData.Open}</span>
                    <span className = "values">C {hoverData.Close}</span>

                    <button onClick={enableLineDrawing}>Add Horizontal Line</button>

          </div>
        </div>
      <div ref={chartRef} className = "candlestick_chart" />
    


      <div className = {`${styles.flex_row} ${styles.flex_start} ${styles.chart_dates_container}`}>
        <div className = {styles.dates}>
          1D
        </div>
        <div className = {styles.dates}>
          5D
        </div>
        <div className = {styles.dates}>
          1M
        </div>
        <div className = {styles.dates}>
          6M
        </div>
        <div className = {styles.dates}>
          1Y
        </div>
        <div className = {styles.dates}>
          5Y
        </div>
        <div className = {styles.dates}>
          All
        </div>



        <button className = {styles.icon_button}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="black" fill-rule="evenodd" d="M11 4h-1v2H7.5A2.5 2.5 0 0 0 5 8.5V13h1v-2h16v8.5c0 .83-.67 1.5-1.5 1.5H14v1h6.5a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 20.5 6H18V4h-1v2h-6V4Zm6 4V7h-6v1h-1V7H7.5C6.67 7 6 7.67 6 8.5V10h16V8.5c0-.83-.67-1.5-1.5-1.5H18v1h-1Zm-5.15 10.15-3.5-3.5-.7.7L10.29 18H4v1h6.3l-2.65 2.65.7.7 3.5-3.5.36-.35-.36-.35Z"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default CandlestickChart;
