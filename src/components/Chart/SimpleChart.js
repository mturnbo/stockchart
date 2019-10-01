import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Simple Chart'
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6]
    },
    {
      data: [5, 3, 2, 4, 6, 8]
    },
    {
      data: [2, 3, 2, 8, 12, 14]
    },
    {
      data: [10, 11, 22, 14, 16, 18]
    }
  ]
};

const SimpleChart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default SimpleChart;
