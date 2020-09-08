import React from 'react'
import Book from './Book'

function BookList({ result }) {
  return (
    <div className="container-fluid">    
      <div className="row">
      { result.map((book, i) => {
        return (
          <Book key={ i } bookImage={ book.volumeInfo.imageLinks } bookTitle={ book.volumeInfo.title } moreLink={ book.volumeInfo.infoLink }
                publishedDate={ book.volumeInfo.publishedDate } bookRating={ book.volumeInfo.averageRating } 
                bookAuthor={ book.volumeInfo.authors } />
        )
      })} 
      </div>
    </div> 
  )
}

export default BookList
