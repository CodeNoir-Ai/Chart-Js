import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import MainData from '../../public/assets/XRP-USD.json';  // Assuming this is correct
import styles from '../../styles/chart.module.css';

import { drawRoundRectWithInnerBorder } from '../helper/canvas-helper';
const TradingChart = () => {
  const chartRef = useRef(null);

  useEffect(() =>
  { 

    // Initialize the canvas and its context
const canvas = chartRef.current
const ctx = canvas.getContext("2d");

// Prepare some mock historical data
const historicalData = [
    { date: new Date("2021-01-01"), price: 120 },
    { date: new Date("2021-02-01"), price: 130 },
    { date: new Date("2021-03-01"), price: 125 },
    { date: new Date("2021-04-01"), price: 135 },
    // ... more data
];

// Draw the axes
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 350);
ctx.lineTo(350, 350);
ctx.stroke();

// Plot the data
const xScale = 300 / (historicalData.length - 1);
const yScale = 300 / (135 - 120); // max and min prices
historicalData.forEach((point, index) => {
    const x = 50 + index * xScale;
    const y = 350 - (point.price - 120) * yScale;
    ctx.lineTo(x, y);
    ctx.stroke();
});

// Use utility function to draw rounded rectangle with inner border
drawRoundRectWithInnerBorder(ctx, 50, 50, 300, 300, 'white', 2, 10, 'red');


  }) 

  return (
    <div className="chart-container">
      <canvas ref={chartRef} className="candlestick_chart"></canvas>
    </div>
  );
};

export default TradingChart;
