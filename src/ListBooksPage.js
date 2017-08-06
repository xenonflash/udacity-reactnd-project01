import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './components/BookShelf'
import { update, getAll } from './BooksAPI'

class ListBookPage extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    bookList: []
  }
  componentDidMount() {
    getAll().then(data => {
      this.setState({bookList: data})
    })
  }
  handleCategoryChange = (bookId, category) => {
    update(bookId, category)
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              bookList={this.state.bookList.filter(book => book.shelf === "currentlyReading")}
              onCategoryChange={this.handleCagegoryChange}
            />
            <BookShelf
              title="Want To Read"
              bookList={[]}
              bookList={this.state.bookList.filter(book => book.shelf === "wantToRead")}
              onCategoryChange={this.handleCagegoryChange}
            />
            <BookShelf
              title="Read"
              bookList={[]}
              bookList={this.state.bookList.filter(book => book.shelf === "read")}
              onCategoryChange={this.handleCagegoryChange}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBookPage

