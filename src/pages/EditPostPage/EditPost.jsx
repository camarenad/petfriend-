import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPost, editPost } from '../../services/api';

class EditPostPage extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      petName: '',
      petAge: '',
      petBreed: '',
      zipCode: '',
      content: '',
      species: '',
      id: ''
    };
  }
  componentDidMount = () => {
    //   console.log(this.props)
    var id = this.props.match.params.id;
    var self = this;
    getPost(id)
      .then(json => json)
      .then(data => {
        self.setState({
          petName: data.petName,
          petAge: data.petAge,
          petBreed: data.petBreed,
          zipCode: data.zipCode,
          content: data.content,
          species: data.petSpecies,
          author: data.author,
          id: data._id
        });
      });
  };
  updatePost = e => {
    e.preventDefault();
    editPost(this.state).then(res => {
    this.props.history.push('/user')
    });
  };

  handleChange = e => {
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
        <form className='form-horizontal' onSubmit={this.updatePost}>
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
                Submit
              </button>
              &nbsp;&nbsp;
              <Link to='/users' className='btn btn-danger'>
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
