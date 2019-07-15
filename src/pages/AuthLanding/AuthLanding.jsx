import React, { Component } from 'react';
import axios from 'axios';
import { thisExpression } from '@babel/types';
class AuthLanding extends Component {
  constructor() {
    super();
    this.state = {
      animals: []
    };
  }
  componentDidMount() {
    fetch('/api/posts/index-animals')
      .then(res => res.json())
      .then(data => {
        this.setState({ animals: data });
        console.log(this.state.animals)
      });
  }

  render() {
    var animal = this.state.animals.map((a, i) => {
      return <div key={i}>
              <div className='card' key={i}>
                <img className="card-img-top" src={a.picture}></img>
                <div className="card-body">
                <h5 className="card-title">{a.petName}</h5>
                <p className='card-text'>{a.content}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Age:{a.petAge}</li>
                <li className="list-group-item">Breed:{a.petBreed}</li>
                <li className="list-group-item">Species:{a.petSpecies}</li>
                <li className="list-group-item">Zip Code:{a.zipCode}</li>
                <li className="list-group-item">User:{a.author.email}</li>
              </ul>
            </div>
            </div>
    });
    return <div>{animal}</div>;
  }
}

export default AuthLanding;
