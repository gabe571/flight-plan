import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Flights from './Flights'
require('dotenv').config()

function App() {
  return (
  <Router>
    <Switch>
      <Route path='/Flights' component={Flights} />
    </Switch>
  </Router>
  );
}

export default App;
