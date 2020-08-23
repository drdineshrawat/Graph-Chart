import React from 'react';
import logo from './logo.svg';
import './App.css';
import StaticLineGraph from './Component/StaticLineGraph';
import StaticBarChart from './Component/StaticBarChart';
import StaticDoughNutGraph from './Component/StaticDoughNutGraph';
import GraphUsingHooks from './Component/GraphUsingHooks';
// import DynamicGraph from './Component/DynamicGraph';

// npm i --save react-chartjs-2
// npm i --save chart.js

function App() {
  return (
    <div className="App">
      <div className="chart">
          <StaticLineGraph/>
          <StaticBarChart/>
          <StaticDoughNutGraph/>
          <GraphUsingHooks/>
          {/* <DynamicGraph/> */}
      </div>
    </div>
  );
}

export default App;
