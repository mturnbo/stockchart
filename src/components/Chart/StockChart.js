import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import data from '../../data/aapl-ohlcv.json';

const StockChart = () => {
  const groupingUnits = [
    [
      'week',
      [1]
    ],
    [
      'month',
      [1, 2, 3, 4, 6]
    ]
  ];

  const options = {
    rangeSelector: {
      selected: 1
    },
    title: {
      text: 'AAPL Historical'
    },
    yAxis: [{
      labels: {
        align: 'right',
        x: -3
      },
      title: {
        text: 'OHLC'
      },
      height: '60%',
      lineWidth: 2,
      resize: {
        enabled: true
      }
    }, {
      labels: {
        align: 'right',
        x: -3
      },
      title: {
        text: 'Volume'
      },
      top: '65%',
      height: '35%',
      offset: 0,
      lineWidth: 2
    }],
    tooltip: {
      split: true
    },
    series: [{
      type: 'candlestick',
      name: 'AAPL',
      data: [],
      dataGrouping: {
        units: groupingUnits
      }
    }, {
      type: 'column',
      name: 'Volume',
      data: [],
      yAxis: 1,
      dataGrouping: {
        units: groupingUnits
      }
    }]
  };

  // extract ohlc and volume from data
  options.series[0].data = data.map(row => row.slice(0,5));
  options.series[1].data = data.map(row => [row[0], row[5]]);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} constructorType="stockChart" options={options} />
    </div>
  );
};

export default StockChart;
