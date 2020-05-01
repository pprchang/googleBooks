import React, { Component } from 'react';
import API from '../utils/API';
import SearchResults from '../components/SearchResults/SearchResults';

class Saved extends Component {
  state = {
    savedBooks: [],
    save: true,
  };

  //render saved books when page load
  componentDidMount() {
    this.getSavedBooks();
  }

  //function to get saved book
  getSavedBooks = () => {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div className='container border rounded bg-dark'>
        <h2 className='text-white'>Saved Books</h2>
        <SearchResults
          books={this.state.savedBooks}
          save={this.state.save}
          getSavedBooks={this.getSavedBooks}
        />
      </div>
    );
  }
}

export default Saved;
