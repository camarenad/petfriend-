import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  updateMessage = msg => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div className='SearchPage'>
        <SearchForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default SearchPage;
