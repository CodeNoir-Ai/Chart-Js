import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const LineChart = () => {
  const ref = useRef();
  const [lineMode, setLineMode] = useState(false);

  useEffect(() => {
    // ... (rest of your D3 code to draw line chart)
    // Set dimensions and margins
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    // Create SVG element
    const svg = d3
      .select(ref.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create scales (just for example)
    const xScale = d3.scaleLinear().domain([0, 4]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, 40]).range([height, 0]);

    // Create line generator
    const line = d3
      .line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    // Draw line (just for example)
    svg.append('path')
       .datum([{x: 0, y: 0}, {x: 4, y: 40}])
       .attr('fill', 'none')
       .attr('stroke', 'blue')
       .attr('stroke-width', 1.5)
       .attr('d', line);

    // Drag behavior
    const drag = d3.drag()
      .on('drag', function(event, d) {
        d3.select(this).attr('y1', event.y).attr('y2', event.y);
      });

    // Add horizontal line on click
    if (lineMode) {
      d3.select(ref.current).on('click', function(event) {
        const [x, y] = d3.pointer(event);
        const newLine = svg.append('line')
                           .attr('x1', 0)
                           .attr('x2', width)
                           .attr('y1', y)
                           .attr('y2', y)
                           .attr('stroke', 'red')
                           .attr('stroke-width', 2);

        // Add drag behavior to the new line
        newLine.call(drag);
      });
    } else {
      d3.select(ref.current).on('click', null);
    }

  }, [lineMode]);

  return (
    <div>
      <button onClick={() => setLineMode(!lineMode)}>
        {lineMode ? 'Exit Line Mode' : 'Add Horizontal Line'}
      </button>
      <svg ref={ref}></svg>
    </div>
  );
};

export default LineChart;
