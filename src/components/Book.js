import React, { Component } from 'react'
/*
example:
<Book
  width: Number     | default to 128
  height: Number    | default to 193
  bgImage: String   | the background image url
  title: String     | title of this book
  author: String    | author of the book
  id: String|Number | id of a book
  onCategoryChange: | callback to hook category change happen
/>

*/

function Book(props) {
  let nativeStyle = {
    width: 128,
    height: 193,
    backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
  };
  let { style, title, author, bgImage, onCategoryChange, id } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={Object.assign({}, nativeStyle, style, {backgroundImage: bgImage})}></div>
        <div className="book-shelf-changer">
          <select onChange={e => {onCategoryChange(null, id, e.target.value)}}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  )
}
//TODO: propTypes

export default Book