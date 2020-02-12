import React from 'react';
import MarketSchedule from './MarketSchedule';
import MonthList from './MonthList';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import NewMarketForm from './NewMarket';


function App() {
  return (
    <div className="App">
    <header className="App-header">
    <h1 className="App-title">Alarming Farming</h1>
    <Link to='/'>Home</Link> | <Link to='/newmarket'>Add Market</Link>
    </header>

    <Switch>
    <Route exact path ='/' component={MarketSchedule}/>
    <Route exact path ='/newmarket' component={NewMarketForm}/>
    <Route exact path ='/seasonal_produce' component={MonthList}/>
    </Switch>
    </div>
  );
}

export default App;
