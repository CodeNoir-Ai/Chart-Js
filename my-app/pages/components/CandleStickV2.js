
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import MainData from '../../public/assets/XRP-USD.json';
import styles from '../../styles/chart.module.css'

import { optimalCandlestickWidth } from '../helper/optimal-bar';

const CandlestickChartV2 = () => {
    const chartRef = useRef(null);
  
    const [hoverData, setHoverData] = useState({High: null, Low: null, Open: null, Close: null});

    useEffect(() => {
      if (chartRef.current) {
        // Prepare data
        const ticker = MainData.map(d => ({
          ...d,
          Date: new Date(d.Date),
          Open: +d.Open,
          High: +d.High,
          Low: +d.Low,
          Close: +d.Close,
        }));
  
      // Chart dimensions
      const width = 1058;
      const height = 880;
      const marginTop = 20;
      const marginRight = 30;
      const marginBottom = 30;
      const marginLeft = 40;
  
        // Scales
        const x = d3.scaleTime()
          .domain(d3.extent(ticker, d => d.Date))
          .range([marginLeft, width - marginRight]);
        const y = d3.scaleLinear()
          .domain([d3.min(ticker, d => d.Low), d3.max(ticker, d => d.High)])
          .rangeRound([height - marginBottom, marginTop])
          .clamp(true);
  
        // Create Canvas
        const canvas = d3.select(chartRef.current).append('canvas').attr('width', width).attr('height', height);
        const context = canvas.node().getContext('2d');
        context.imageSmoothingQuality = "high";
        context.imageSmoothingEnabled = false;

    
        // Create axes
        const xAxis = d3.axisBottom(x);
        const yAxis = d3.axisRight(y);
  
        // Initialize zoom

        const zoom = d3.zoom()
        .scaleExtent([0.5, 32])
        .translateExtent([[marginLeft, -Infinity], [width - marginRight, Infinity]])
        .on('zoom', function(event) {
            const newTransform = event.transform;
    
            const zx = event.transform.rescaleX(x);
            const zy = newTransform.rescaleY(y);
    
            // Calculate new candle width based on zoom factor
            const visibleRange = zx.domain();

            //Filterd Data
            const filteredData = ticker.filter(d => d.Date >= visibleRange[0] && d.Date <= visibleRange[1]);
            //Cacluate Bar Spacing
            const barSpacing = (width - marginLeft - marginRight) / filteredData.length;


            let scalingFactor = 3;
            const maxCandleWidth = 50;  // Set a maximum limit for the candle width
            const minCandleWidth = 1;   // Set a minimum limit for the candle width
            const baseCandleWidth = (width - marginLeft - marginRight) / filteredData.length;  // Calculate base candle width

            let newCandleWidth = Math.max(minCandleWidth, Math.min(maxCandleWidth, baseCandleWidth));
            let newSpacing = newCandleWidth * 0.2;  // 20% of the candle width for spacing
            
   
                    // Log for debugging
            console.log("Filtered Data Length:", filteredData.length);
            console.log("New Candle Width:", newCandleWidth);





    
            context.clearRect(0, 0, width, height);  // Clear canvas
            drawChart(context, zx, zy, filteredData, newCandleWidth, newSpacing);  // Redraw with newSpacing
            drawAxes(context, zx, zy, xAxis, yAxis, width, height, marginLeft, marginBottom); // Redraw axes
        });
    
        canvas.call(zoom);
  
        drawChart(context, x, y, ticker, 5);  // Initial draw with default candle width of 5
        drawAxes(context, x, y, xAxis, yAxis, width, height, marginLeft, marginBottom); // Initial draw of axes
        

        let crosshairX = 0;
        let crosshairY = 0;


        const drawCrosshair = (context, x, y, width, height, marginLeft, marginBottom) => {
            context.strokeStyle = 'black';
            context.lineWidth = 1;

            // Draw vertical line
            context.beginPath();
            context.moveTo(x, marginBottom);
            context.lineTo(x, height - marginBottom);
            context.stroke();

            // Draw horizontal line
            context.beginPath();
            context.moveTo(marginLeft, y);
            context.lineTo(width - marginLeft, y);
            context.stroke();
        };
        
        
        canvas.on("mousemove", function(event) {
    const [mx, my] = d3.pointer(event); // Get mouse coordinates
    const date = x.invert(mx); // Invert the x-coordinate to get the corresponding date

    // Find the closest data point to the mouse position
    const closestData = ticker.reduce((prev, curr) => {
        return Math.abs(curr.Date - date) < Math.abs(prev.Date - date) ? curr : prev;
    });

    // Update the component state
    setHoverData({
        High: closestData.High,
        Low: closestData.Low,
        Open: closestData.Open,
        Close: closestData.Close
    });

    
});

      }





    }, []);
  

    const marginRight = 30;
    const drawChart = (context, x, y, data, candleWidth, spacing) => {
        // Updated logic to use dynamic candleWidth and to prevent overlapping
        data.forEach((d, i) => {
          const xPos = x(d.Date) - candleWidth / 2 + i * spacing;
          context.fillStyle = d.Open > d.Close ? '#FF4136' : '#2ECC40';
          context.fillRect(xPos, y(Math.max(d.Open, d.Close)), candleWidth, Math.abs(y(d.Open) - y(d.Close)));
    
          // Drawing the wicks
          context.strokeStyle = d.Open > d.Close ? '#FF4136' : '#2ECC40';
          context.beginPath();
          context.moveTo(xPos + candleWidth / 2, y(d.Low));
          context.lineTo(xPos + candleWidth / 2, y(d.High));
          context.stroke();

          console.log("this is being redrawn")




        });



    };

    const drawCrosshair = (context, x, y, width, height, marginLeft, marginBottom, options = {}) => {
      const { lineColor = 'red', lineWidth = 1, lineDash = [2, 2] } = options;
      context.strokeStyle = lineColor;
      context.lineWidth = lineWidth;
      context.setLineDash(lineDash);
    
      // Draw vertical line
      context.beginPath();
      context.moveTo(x, marginBottom);
      context.lineTo(x, height - marginBottom);
      context.stroke();
    
      // Draw horizontal line
      context.beginPath();
      context.moveTo(marginLeft, y);
      context.lineTo(width - marginLeft, y);
      context.stroke();
    };
    
    
      
    
  
      const drawAxes = (context, x, y, xAxis, yAxis, width, height, marginLeft, marginBottom) => {
        // Draw x-axis line
        context.strokeStyle = '#111111'; // Dark gray
        context.lineWidth = 2;

        context.beginPath();
        context.moveTo(marginLeft, height - marginBottom);
        context.lineTo(width - marginLeft, height - marginBottom);
        context.stroke();
      
        // Draw y-axis line
        context.beginPath();
        context.moveTo(width - marginLeft, marginBottom);
        context.lineTo(width - marginLeft, height - marginBottom);
        context.stroke();
      
        // Add y-axis labels for each tick
        const ticks = y.ticks();
        context.font = "12px Arial";
        context.textAlign = "right";
        context.textBaseline = "middle";
        context.fillStyle = '#111111'; // Dark gray
      
        ticks.forEach(tick => {
          context.fillText(tick, width - marginLeft + 10, y(tick));
        });


        const xTicks = x.ticks(10); // Generate 10 ticks for the x-axis
        const visibleRange = x.domain();
        const rangeDuration = visibleRange[1] - visibleRange[0]; // in milliseconds
    
        let timeFormat;
    
        if (rangeDuration > 90 * 24 * 60 * 60 * 1000) {  // More than 90 days
            timeFormat = "%b";  // Just the month
        } else if (rangeDuration > 7 * 24 * 60 * 60 * 1000) {  // More than 7 days
            timeFormat = "%b %d";  // Month and day
        } else {  
            timeFormat = "%b %d, %H:%M";  // Month, day, and time
        }
    
        context.font = "12px Arial";
        context.textAlign = "center";
        context.textBaseline = "top";
        context.fillStyle = 'black'; // Text color
    
        xTicks.forEach(tick => {
            const xPos = x(tick);
            context.fillText(d3.timeFormat(timeFormat)(tick), xPos, height - marginBottom + 10);
        });

      };
      
  
    return (
      <div className="chart-container">

        <div className = "valuesWrapper">
          <div className = "valuesContainer">
        <span className = "values">H {hoverData.High}</span>
                    <span className = "values">L {hoverData.Low}</span>
                    <span className = "values">O {hoverData.Open}</span>
                    <span className = "values">C {hoverData.Close}</span>
          </div>
        </div>

        <div ref={chartRef} className="candlestick_chart" />
        {/* Add other elements here */}
      </div>
    );
  };
  
  export default CandlestickChartV2;
  
  