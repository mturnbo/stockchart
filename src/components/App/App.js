import React from 'react';
import './App.scss';
import SimpleChart from 'components/Chart/SimpleChart';
import StockChart from 'components/Chart/StockChart';

const App = () => (
  <div className="app-container">
    <div className="app-content">
      <h2>Stock Charts</h2>
      <SimpleChart />
      <hr />
      <StockChart />
    </div>
  </div>
);

export default App;
