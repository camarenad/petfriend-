import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LandingPage from '../LandingPage/LandingPage';
import AuthLanding from '../AuthLanding/AuthLanding';
import SearchPage from '../SearchPage/SearchPage';
import SubmitPage from '../SubmitPage/SubmitPage';
import EditPostPage from '../EditPostPage/EditPost'

import userService from '../../utils/userService';

// import Index from '../../components/Index';
// import Create from '../../components/Create';
// import Edit from '../../components/Edit';
// import Show from '../../components/Show';

import { Route, Switch,Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
    window.location = '/animals';
  };
  render() {
    return (
      <div>
        <NavBar user={userService.getUser()} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path='/signup'
            render={({ props }) => (
              <SignupPage
                props={props}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path='/login'
            render={({ props }) => (
              <LoginPage
                props={props}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path='/'
            render={({ props }) => <LandingPage props={props} />}
          />
             <Route
            exact
            path='/animals'
            render={ (props) =>
            
            userService.getUser() ?
            <AuthLanding {...props} />
            :
            <Redirect to='/login' />
            }/>
           <Route
            exact
            path='/search'
            render={ (props) =>
            
            userService.getUser() ?
            <SearchPage {...props} />
            :
            <Redirect to='/login' />
            }/>
           <Route
            exact
            path='/submit'
            render={ (props) =>
            
            userService.getUser() ?
            <SubmitPage {...props} />
            :
            <Redirect to='/login' />
            }/>
          <Route
            exact
            path='/posts/:id/edit'
            render={ (props) =>
            
            userService.getUser() ?
            <EditPostPage {...props} />
            :
            <Redirect to='/login' />
            }/>
        </Switch>
      </div>
    );
  }
}

export default App;
