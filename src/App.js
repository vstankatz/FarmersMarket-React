import React from 'react';
import MonthList from './MonthList';
import MarketSchedule from './MarketSchedule';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MarketSchedule/>
        <MonthList/>
      </header>
    </div>
  );
}

export default App;
