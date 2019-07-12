import React, { Component } from 'react';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='jumbotron'>
        <h1 name='display-4'>Welcome To PetFriend</h1>
        <p name='lead'>Find adoptable animals before they hit the shelter</p>
        <hr name='my-4' />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p name='lead'>
          <a name='btn btn-primary btn-lg' href='/signup' role='button'>
            Learn more
          </a>
        </p>
      </div>
    );
  }
}

export default LandingPage;
