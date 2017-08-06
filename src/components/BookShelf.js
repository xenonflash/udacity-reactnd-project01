import React from 'react'
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
                  authors={book.authors}
                  bgImage={book.imageLinks.thumbnail}
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