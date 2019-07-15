import React, { Component } from 'react';
import axios from 'axios';
import { thisExpression } from '@babel/types';
import  userService from '../../utils/userService'
import {Link} from 'react-router-dom'
class AuthLanding extends Component {
  constructor() {
    super();
    this.state = {
      animals: [],
    };
  }
  componentDidMount() {
    console.log(this.state.currentUsr)
    fetch('/api/posts/index-animals')
      .then(res => res.json())
      .then(data => {
        this.setState({ animals: data,currentUsr: userService.getUser()});
        console.log(this.state.animals);
      });
  }

  render() {
    var animal = this.state.animals.map((a, i) => {
      return (
        <div key={i}>
          <div className='card' key={i}>
            <img
              style={{ width: 300, height: 300 }}
              className='card-img-top'
              src={a.picture}
            />
            <div className='card-body'>
              <h5 className='card-title'>{a.petName}</h5>
              <p className='card-text'>{a.content}</p>
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Age:{a.petAge}</li>
              <li className='list-group-item'>Breed:{a.petBreed}</li>
              <li className='list-group-item'>Species:{a.petSpecies}</li>
              <li className='list-group-item'>Zip Code:{a.zipCode}</li>
              <li className='list-group-item'>User:{a.author.email}</li>
            </ul>
          </div>
          { (this.state.currentUsr && this.state.currentUsr._id )=== a.author._id ? <Link to={`/posts/${a._id}/edit`} className='btn btn-primary'>Edit</Link> :<input type='submit' className='btn btn-primary' value='Contact'  />}
          <br />
        </div>
      );
    });
    return <div>
     {animal} 
    </div>;
  }
}

export default AuthLanding;
