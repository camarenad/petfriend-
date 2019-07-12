import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createPost } from '../../services/api';
import tokenService from '../../utils/tokenService';
import axios from 'axios';
import { brotliDecompress } from 'zlib';

class SubmitForm extends Component {
  constructor() {
    super();
    this.state = {
      zipCode: '',
      petName: '',
      petAge: '',
      petBreed: '',
      petSpecies: '',
      content: '',
      file: null
    };
  }
  handleChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitFile = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    // const body = { ...this.state };
    // delete body.file;
    for (let key in this.state) {
      if (!key === 'file') {
        formData.append(key, this.state[key]);
      }
    }
    axios
      .post(`/api/posts/create`, formData, {
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // 'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + tokenService.getToken()
        }
      })
      .then(response => {
        console.log('response from submitFile', response);
        // handle your response;
        console.log(response.data) // newly created post from server
      })
      .catch(error => {
        console.log('err from submitFile', error);
        // handle your error
      });
  };

  handleFileUpload = event => {
    console.log(event.target.files[0]);

    this.setState({ file: event.target.files });
  };

  // handleSubmit = e => {
  //   console.log(this.state)
  //   e.preventDefault()
  //   console.log(this.state.petSpecies)
  //   console.log(this.state.content)
  //   createPost(this.state).then(function(json) {
  //     console.log(json)
  //   })
  // }

  render() {
    return (
      <div className='container'>
        <header className='header-footer text-center'>
          Surrender An Animal
        </header>
        <form className='form-horizontal' onSubmit={this.submitFile}>
          <div className='form-group'>
            <div className='col-sm-12'>
              <input
                type='text'
                className='form-control'
                placeholder='Animal Name'
                value={this.state.petName}
                name='petName'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12'>
              <input
                type='text'
                className='form-control'
                placeholder='Animal Age'
                value={this.state.petAge}
                name='petAge'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12'>
              <input
                type='text'
                className='form-control'
                placeholder='Animal Breed'
                value={this.state.petBreed}
                name='petBreed'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12'>
              <input
                type='text'
                className='form-control'
                placeholder='Zip Code'
                value={this.state.zipCode}
                name='zipCode'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12'>
              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='customFile'
                  onChange={this.handleFileUpload}
                />
                <label className='custom-file-label'>Upload a photo</label>
              </div>
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12'>
              <textarea
                type='textarea'
                className='form-control'
                placeholder='Description'
                value={this.state.content}
                name='content'
                onChange={this.handleChange}
              />
            </div>
            <div className='form-group'>
              <div className='col-sm-12 text-center'>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='petSpecies'
                    id='inlineRadio1'
                    value='dog'
                    onChange={this.handleChange}
                  />
                  <label className='form-check-label'>dog</label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='petSpecies'
                    id='inlineRadio2'
                    value='cat'
                    onChange={this.handleChange}
                  />
                  <label className='form-check-label'>cat</label>
                </div>
              </div>
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12 text-center'>
              <button
                type='submit'
                className='btn btn-primary'
                // disabled={this.isFormInvalid()}
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

export default SubmitForm;
