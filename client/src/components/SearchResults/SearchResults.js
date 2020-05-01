import React, { Component } from 'react';
import API from '../../utils/API';

class SearchResults extends Component {
  state = {
    savedBooks: [],
  };

  //function to handle save
  handleSave = (book) => {
    API.saveBook(book)
      .then((savedBook) =>
        //use concat to merge array
        this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) })
      )
      .catch((err) => console.error(err));
  };

  //function to handle delete
  handleDelete = (id) => {
    API.deleteBook(id)
      .then((res) => {
        //call getSavedBooks function
        this.props.getSavedBooks();
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div>
        {!this.props.books.length ? (
          <h1 className='text-center text-white'>No Results</h1>
        ) : (
          <div>
            {this.props.books.map((result) => (
              <div className='card mb-3' key={result._id}>
                <div className='row'>
                  <div className='col-md'>
                    <img
                      alt={result.title}
                      className='img-fluid'
                      src={result.image}
                    />
                  </div>
                  <div className='col-md-10'>
                    <div className='card-body'>
                      <h5 className='card-title'>
                        {result.title} by {result.authors}
                      </h5>
                      <p className='card-text'>{result.description}</p>
                      <div>
                        <a
                          href={result.link}
                          className='btn border bg-primary mt-2'
                          target='_blank'
                        >
                          <h6>View</h6>
                        </a>

                        {this.props.save ? (
                          <button
                            onClick={() => this.handleDelete(result._id)}
                            className='btn border bg-danger mt-2 ml-2'
                          >
                            Delete
                          </button>
                        ) : (
                          <button
                            onClick={() => this.handleSave(result)}
                            className='btn border bg-success mt-2 ml-2'
                          >
                            Save
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SearchResults;
