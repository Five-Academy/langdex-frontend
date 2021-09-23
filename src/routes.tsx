import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Language from './pages/Language';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/language/:id" component={Language} />
      </Switch>
    </Router>
  );
};

export default Routes;
