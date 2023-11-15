import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import LandingPage from './pages/LandingPage';
import ItemPage from './pages/ItemPage';
import Header from './components/Header'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/item-page/:id">
              <ItemPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
