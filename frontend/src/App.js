import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import './App.css';
import Landing from './pages/Landing.js';
import OrgHome from './pages/OrgHome.js';
import OrgReg from './pages/OrgReg.js';
import UserHome from './pages/UserHome.js';
import UserReg from './pages/UserReg';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/reg/user" component={UserReg} />
        <Route path="/reg/org" component={OrgReg} />
        <Route path="/home/user" component={UserHome} />
        <Route path="/home/org" component={OrgHome} />
      </Switch>
    </Router>
  );
}

export default App;
