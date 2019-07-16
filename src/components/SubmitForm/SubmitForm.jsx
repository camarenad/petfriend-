import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tokenService from '../../utils/tokenService';
import axios from 'axios';
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
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitPost = event => {
    event.preventDefault();
    const postData = { ...this.state };
    delete postData.file;
    axios
      .post(`/api/posts/create-post`, postData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + tokenService.getToken()
        }
      })
      .then(response => {
        this.submitFile(response.data.postId).then(post => {
          console.dir(post);
          window.location = '/animals'
        });
      })
      .catch(err => console.log(err));
  };
  submitFile = postId => {
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    return axios
      .post(`/api/posts/upload-file/${postId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + tokenService.getToken()
        }
      })
      .then(response => {
        console.log('response from submitFile', response);
        // handle your response;
        console.log(response.data); // newly created post from server
        return response.data;
      });
  };
  handleFileUpload = event => {
    console.log(event.target.files[0]);
    this.setState({ file: event.target.files });
  };

  render() {
    return (
      <div className='container'>
        <header className='header-footer text-center'>
          Surrender An Animal
        </header>
        <form className='form-horizontal' onSubmit={this.submitPost}>
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
                Submit
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
