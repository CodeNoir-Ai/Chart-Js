import React, { useEffect, useRef } from 'react';
import anychart from 'anychart';

const OldChart = () => {
  const containerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const loadChart = async () => {
      const response = await fetch(
        'https://gist.githubusercontent.com/shacheeswadia/cd509e0b0c03964ca86ae7d894137043/raw/5f336c644ad61728dbac93026f3268b86b8d0680/teslaDailyData.csv'
      );
      const csvData = await response.text();

      const dataTable = anychart.data.table();
      dataTable.addData(anychart.data.csv.parser().parse(csvData));

      const mapping = dataTable.mapAs({
        open: 1,
        high: 2,
        low: 3,
        close: 4,
      });

      const chart = anychart.stock();
      const plot = chart.plot(0);
      plot.yGrid(true).xGrid(true).yMinorGrid(true).xMinorGrid(true);

      const series = plot.candlestick(mapping).name('Tesla');
      series.legendItem().iconType('rising-falling');

      chart.scroller().candlestick(mapping);

      chart.selectRange('2020-11-27', '2021-11-26');

      const rangePicker = anychart.ui.rangePicker();
      rangePicker.render(chart);

      const rangeSelector = anychart.ui.rangeSelector();
      rangeSelector.render(chart);

      // chart.title('Tesla Inc. Stock Chart');

      chart.container(containerRef.current);
      chart.draw();

      chartRef.current = chart;
    };

    loadChart();
  }, []);

  const startDrawing = (type) => {
    const chart = chartRef.current;
    const plot = chart.plot(0);
    plot.annotations().startDrawing(type);
  };

  const cancelDrawing = () => {
    const chart = chartRef.current;
    const plot = chart.plot(0);
    plot.annotations().cancelDrawing();
  };

  const handleAnnotationSelect = (e) => {
    const selectedAnnotation = e.annotation;
    selectedAnnotation.selectStroke("#FF0000", 3, "5 2", "round");
    chartRef.current.title(selectedAnnotation.getType() + " annotation selected.");
  };

  return (
    <div>
      {/* <button onClick={() => startDrawing("triangle")}>Draw Triangle</button>
      <button onClick={() => startDrawing("Ellipse")}>Draw Ellipse</button>
      <button onClick={() => startDrawing("Fibonacci Arc")}>Draw Fibonacci Arc</button>
      <button onClick={cancelDrawing}>Cancel Drawing</button> */}
      <div ref={containerRef} style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
};

export default OldChart;