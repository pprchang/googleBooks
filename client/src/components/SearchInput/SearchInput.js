import React from 'react';

function SearchInput(props) {
  return (
    <div className='container'>
      <form>
        <div className='form-group border p-2 rounded bg-dark'>
          <label>
            <h2 className='text-white'>Book Search</h2>
          </label>
          <input
            onChange={props.handleInputChange}
            value={props.searchTerm}
            name='search'
            type='text'
            className='form-control'
            placeholder='Search a Book'
          />
          <button
            onClick={props.handleFormSubmit}
            className='btn btn-success mt-3'
          >
            <h6>Search</h6>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
