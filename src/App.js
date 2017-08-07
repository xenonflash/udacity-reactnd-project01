import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBookPage from './ListBooksPage'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    bookList: []
  }
  componentDidMount() {
    this.getBookList()
  }
  getBookList() {
    BooksAPI.getAll().then(data => {
      this.setState({bookList: data})
    })
  }
  handleCategoryChange = (bookId, shelf) => {
    BooksAPI.update(bookId, shelf).then(
      this.getBookList.bind(this)
    )
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBookPage
            bookList={this.state.bookList}
            handleCategoryChange={this.handleCategoryChange}
          />
        )}/>
        <Route path="/search" render={({history}) => (
          <SearchPage
            handleCategoryChange={(bookId, shelf) => {
              this.handleCategoryChange(bookId, shelf);
              history.push('/');
            }}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
