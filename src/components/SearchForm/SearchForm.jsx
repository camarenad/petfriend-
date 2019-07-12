import React, { Component } from 'react';

class SearchForm extends Component {
  state = {};
  render() {
    return (
      <div className='form-group container d-flex justify-content-center'>
        <form>
          <label>Enter your Zipcode</label>
          <br />
          <input type='text' placeholder='Zip Code' />
          <br />
          <label>Miles</label>
          <br />
          <input type='text' placeholder='Enter Miles' />
          <br />
          <input className='' type='submit' />
        </form>
      </div>
    );
  }
}

export default SearchForm;
