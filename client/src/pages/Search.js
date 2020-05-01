import React from 'react';
import SearchResults from '../components/SearchResults/SearchResults';
import API from '../utils/API';
import SearchInput from '../components/SearchInput/SearchInput';

class Search extends React.Component {
  state = {
    value: '',
    books: [],
  };

  displayBook = (bookInfo) => {
    return {
      _id: bookInfo.id,
      title: bookInfo.volumeInfo.title,
      authors: bookInfo.volumeInfo.authors,
      description: bookInfo.volumeInfo.description,
      image: bookInfo.volumeInfo.imageLinks.thumbnail,
      link: bookInfo.volumeInfo.previewLink,
    };
  };

  //function to get book
  searchBook = (query) => {
    API.getBook(query)
      .then((res) =>
        this.setState({
          books: res.data.items.map((bookInfo) => this.displayBook(bookInfo)),
        })
      )
      .catch((err) => console.error(err));
  };

  //function to handle change
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  //function to handle form submit
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBook(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchInput
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className='container border rounded bg-dark'>
          <h2 className='text-white'>Search Results</h2>
          <SearchResults books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default Search;
