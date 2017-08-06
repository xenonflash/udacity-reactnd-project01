import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from './BooksAPI'
import SearchBar from './components/SearchBar'
import Book from './components/Book'
import _ from 'lodash'

class SearchPage extends Component {
  state = {
    searchResult: []
  }
  handleSearch = _.debounce((searchText) => {
    if (!!searchText) {
      search(searchText, 10).then(data => {
        this.setState({
          searchResult: data.length ? data : []
        })
      })
    }
  }, 300)
  render() {
    return (
      <div className="search-books">
        <SearchBar onChange={this.handleSearch} />
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchResult.map(book => (
                <li key={book.id}>
                  <Book
                    title={book.title}
                    authors={book.authors}
                    bgImage={book.imageLinks.thumbnail}
                    shelf={book.shelf}
                  />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
