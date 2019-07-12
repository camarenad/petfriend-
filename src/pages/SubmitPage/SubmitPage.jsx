import React, { Component } from 'react';
import SubmitForm from '../../components/SubmitForm/SubmitForm';

class SubmitPage extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = e => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
        <SubmitForm {...this.props} />
    
    );
  }
}

export default SubmitPage;
