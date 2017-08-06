import React from 'react'
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
  };
  let { style, title, authors, bgImage, onCategoryChange, id, shelf } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={Object.assign({}, nativeStyle, style, {background: `url(${bgImage})`})}></div>
        <div className="book-shelf-changer">
          <select onChange={e => {onCategoryChange(null, id, e.target.value)}} value={shelf}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors && authors.toString()}</div>
    </div>
  )
}
//TODO: propTypes

export default Book