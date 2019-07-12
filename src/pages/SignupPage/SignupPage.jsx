import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import '../SignupPage/SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='SignupPage'>
        <SignupForm {...this.props} />
        {/* <p>{this.state.message}</p> */}
      </div>
    );
  }
}

export default SignupPage;
