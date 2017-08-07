import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './components/BookShelf'

class ListBookPage extends Component {
  render() {
    let {bookList, handleCategoryChange} = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              bookList={bookList.filter(book => book.shelf === "currentlyReading")}
              onCategoryChange={handleCategoryChange}
            />
            <BookShelf
              title="Want To Read"
              bookList={bookList.filter(book => book.shelf === "wantToRead")}
              onCategoryChange={handleCategoryChange}
            />
            <BookShelf
              title="Read"
              bookList={bookList.filter(book => book.shelf === "read")}
              onCategoryChange={handleCategoryChange}
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

