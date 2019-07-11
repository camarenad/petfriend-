import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LandingPage from '../LandingPage/LandingPage';
import AuthLanding from '../AuthLanding/AuthLanding'
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';

// import Index from '../../components/Index';
// import Create from '../../components/Create';
// import Edit from '../../components/Edit';
// import Show from '../../components/Show';

import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
    window.location = '/user'
  };
  render() {
    
    return (
      <div>
        <NavBar user={userService.getUser()} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path='/signup'
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path='/login'
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
                
              />
            )}
          />
          {!this.state.user ? <Route
            exact
            path='/'
            render={({ history }) => <LandingPage history={history} />}
          /> :
          <Route
            exact
            path='/user'
            render={({ history }) => <AuthLanding history={history} />}
          />}
        </Switch>
      </div>
    );
  }
}

export default App;
