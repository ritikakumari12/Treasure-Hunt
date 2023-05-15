import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import Dashboard from './Dashboard';
import Puzzle from './Puzzle';
import AdminDashboard from './AdminDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/puzzle" component={Puzzle} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

