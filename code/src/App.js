import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DetailPage } from './pages/DetailPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Upcoming">
          <Home />
        </Route>
        <Route path="/movie/:movieId">
          <DetailPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
