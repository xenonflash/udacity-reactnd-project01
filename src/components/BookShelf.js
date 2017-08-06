import React, { Component } from 'react'
import Book from './Book'

function BookShelf(props) {
  let { title, bookList, onCategoryChange } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            bookList.map((book, index) => (
              <li key={book.id}>
                <Book
                  title={book.title}
                  author={book.author}
                  onCategoryChange={onCategoryChange}
                />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}
// TODO propsType

export default BookShelf