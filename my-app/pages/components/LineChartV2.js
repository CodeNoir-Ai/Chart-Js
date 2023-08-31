

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import MainData from '../../public/assets/XRP-USD.json';
import styles from '../../styles/chart.module.css'




const CandlestickChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            //load data

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
        }



        const drawChart = () => 
        { 
            
        }
    


    }, [MainData])





    return(

        <div className = "chart-container">

        
      <div ref={chartRef} className = "candlestick_chart" />
    


    </div>

    )



;
    }
