import React, { Component } from 'react';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div class='jumbotron'>
        <h1 Name='display-4'>Welcome To PetFriend</h1>
        <p Name='lead'>Find adoptable animals before they hit the shelter</p>
        <hr Name='my-4' />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p Name='lead'>
          <a Name='btn btn-primary btn-lg' href='/signup' role='button'>
            Learn more
          </a>
        </p>
      </div>
    );
  }
}

export default LandingPage;
