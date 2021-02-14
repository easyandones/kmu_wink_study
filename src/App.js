import React, { Component } from 'react';

import './App.css';

import { Link, NavLink, Route, BrowserRouter as Router } from "react-router-dom"

import MainPage from './pages/MainPage/MainPage.js';
import TimelinePage from './pages/TimelinePage/TimelinePage.js';
import MyPage from './pages/MyPage/MyPage.js';
import SignupPage from './pages/SignupPage/SignupPage.js';
import LoginPage from './pages/LoginPage/LoginPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="NavBar">
            <div>
              <NavLink exact to="/">MainPage</NavLink>
            </div>
            <div>
              <NavLink exact to="/timeline">TimelinePage</NavLink>
            </div>
            <div>
              <NavLink exact to="/mypage">MyPage</NavLink>
            </div>
            <div>
              <NavLink exact to="/signup">SignupPage</NavLink>
            </div>
            <div>
              <NavLink exact to="/login">LoginPage</NavLink>
            </div>
          </div>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/timeline" component={TimelinePage} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
        </Router>
      </div>
    );
  }
}

export default App;