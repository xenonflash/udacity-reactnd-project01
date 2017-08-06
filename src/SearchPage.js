import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './components/SearchBar'

class SearchPage extends Component {
  
  render() {
    return (
      <div className="search-books">
        <SearchBar/>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
