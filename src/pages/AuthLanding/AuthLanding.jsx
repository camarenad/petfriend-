import React, { Component } from 'react';
import tokenService from '../../utils/tokenService';
// import axios from 'axios';
import userService from '../../utils/userService';
import { deletePost } from '../../services/api';
import { Link } from 'react-router-dom';
import './AuthLanding.css';

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
    deletePost(id).then(() => {
      fetch(`/api/posts/index-animals?token=${tokenService.getToken()}`)
        .then(res => res.json())
        .then(data => {
          this.setState({ animals: data });
        });
    });
  };

  render() {
    var animal = this.state.animals.map((a, i) => {
      return (
        <div key={i} className='container'>
          <div className='row' key={i}>
            <div className='col justify-content-center'>
              <div className='card' key={i}>
                <img
                  style={{ vh: 5, vw: 5 }}
                  className='card-img-top'
                  src={a.picture}
                />
                <div className='card-body'>
                  <h5 className='card-title' style={{color:'#FF5733'}}>{a.petName}</h5>
                  <p className='card-text'>{a.content}</p>
                </div>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>Age: {a.petAge}</li>
                  <li className='list-group-item'>Breed: {a.petBreed}</li>
                  {/* <li className='list-group-item'>Species: {a.petSpecies}</li> */}
                  <li className='list-group-item'>Zip Code: {a.zipCode}</li>
                  <li className='list-group-item'>User: {a.author.email}</li>
                </ul>
              </div>
              {(this.state.currentUsr && this.state.currentUsr._id) ===
              a.author._id ? (
                <div className='text-center'>
                  <Link to={`/posts/${a._id}/edit`} className='btn btn-info'>
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
                <div className='text-center'>
                  <input
                    type='submit'
                    className='btn btn-primary'
                    value='Contact'
                  />
                </div>
              )}
              <br />
            </div>
          </div>
        </div>
      );
    });
    return <div>
       <hr />
      <div>
      <h1 className='text-center adopt-header'>Adoptable Pets</h1>
      </div>
    {animal}
    </div>;
  }
}

export default AuthLanding;
