import React, { Component } from 'react';
// import axios from 'axios';
import userService from '../../utils/userService';
import { getPost, deletePost } from '../../services/api';
import { Link } from 'react-router-dom';
class AuthLanding extends Component {
  constructor() {
    super();
    this.state = {
      animals: [],
      currentUsr: '',
      id: ''
    };
  }
  componentDidMount() {
    fetch('/api/posts/index-animals')
      .then(res => res.json())
      .then(data => {
        this.setState({ animals: data, currentUsr: userService.getUser() });
      });
  }

  handleDelete = id => {
    console.log('$$$$$$$$$$$$$$$$$$$$AuthLanding handleDelete');
    getPost(id)
      .then(json => json)
      .then(data => {
        deletePost(data._id);
        window.location = '/animals'
      });
  };

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
          {(this.state.currentUsr && this.state.currentUsr._id) ===
          a.author._id ? (
            <div>
              <Link to={`/posts/${a._id}/edit`} className='btn btn-primary'>
                Edit
              </Link>
              <a
                // href={`/posts/${a._id}`}
                onClick={() => this.handleDelete(a._id)}
                className='btn btn-danger'
              >
                Delete
              </a>
            </div>
          ) : (
            <input type='submit' className='btn btn-primary' value='Contact' />
          )}
          <br />
        </div>
      );
    });
    return <div>{animal}</div>;
  }
}

export default AuthLanding;
