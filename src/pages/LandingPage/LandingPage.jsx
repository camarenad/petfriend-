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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use
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
