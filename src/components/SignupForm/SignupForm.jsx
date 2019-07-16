import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = e => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      console.log(err);
    }
  };

  isFormInvalid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    return (
      <div>
        <header className='header-footer text-center'>Sign Up</header>
        <form className='form-horizontal' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <div className='col-sm-12'>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                value={this.state.name}
                name='name'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12'>
              <input
                type='email'
                className='form-control'
                placeholder='Email'
                value={this.state.email}
                name='email'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                value={this.state.password}
                name='password'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12'>
              <input
                type='password'
                className='form-control'
                placeholder='Confirm Password'
                value={this.state.passwordConf}
                name='passwordConf'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12 text-center'>
              <button
                className='btn btn-primary'
                disabled={this.isFormInvalid()}
              >
                Sign Up
              </button>
              &nbsp;&nbsp;
              <Link to='/' className='btn btn-danger'>
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
