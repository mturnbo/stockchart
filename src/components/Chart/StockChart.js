import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import data from '../../data/aapl-ohlc.json';

const options = {
  title: {
    text: 'AAPL Stock Price'
  },
  rangeSelector: {
    selected: 2
  },
  series: [{
    type: 'ohlc',
    dateFormat: 'YYYY-mm-dd',
    name: 'AAPL Stock Price',
    data,
    dataGrouping: {
      units: [[
        'week', // unit name
        [1] // allowed multiples
      ], [
        'month',
        [1, 2, 3, 4, 6]
      ]]
    }
  }]
};

const StockChart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} constructorType="stockChart" options={options} />
  </div>
);

export default StockChart;
