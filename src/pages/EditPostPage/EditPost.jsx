import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPost } from '../../services/api';

class EditPostPage extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      name: '',
      age: '',
      breed: '',
      zipCode: '',
      description: ''
    };
  }
  componentDidMount = () => {
    //   console.log(this.props)
    var id = this.props.match.params.id;
    var self = this;
    getPost(id).then(function(json){
        console.log(json)
    });
  };
  handleChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
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

export default EditPostPage;
