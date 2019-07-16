import React, { Component } from 'react';

const apiKey =
  'WtO3PJB6bPjRVxR28JTGqQicYMtqzK9Up4JDpwb6Uujx4DRLRCZyJd4zmxDp5xNK';

class SearchForm extends Component {
  state = { zipCode: '', distance: '', zipList: [] };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    fetch(`https://www.zipcodeapi.com/rest/${apiKey}/radius.json/${this.state.zipCode}/${this.state.distance}/mile`, {mode: 'no-cors'})
    .then(data => {
      console.log(data)
    })
  };

  render() {
    return (
      <div
        className='form-group container d-flex justify-content-center'
        onSubmit={this.handleSubmit}
      >
        <form>
          <label>Enter your Zipcode</label>
          <br />
          <input
            type='text'
            placeholder='Zip Code'
            onChange={this.handleChange}
            className='form-control'
            name='zipCode'
          />
          <br />
          <label>Miles</label>
          <br />
          <input
            type='text'
            placeholder='Enter Miles'
            onChange={this.handleChange}
            className='form-control'
            name='distance'
          />
          <br />
          <input className='' type='submit' />
        </form>
      </div>
    );
  }
}

export default SearchForm;
