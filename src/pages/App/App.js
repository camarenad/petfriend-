import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';


// import Index from '../../components/Index';
// import Create from '../../components/Create';
// import Edit from '../../components/Edit';
// import Show from '../../components/Show';

import { Route, Switch, Link } from 'react-router-dom';



class App extends Component {

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  render() {
    return (
      <div>
        <NavBar />
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
        </Switch>
      </div>
    );
  }
}

export default App;
