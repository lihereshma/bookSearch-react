import React from 'react'

function Book({ bookImage, bookTitle, bookAuthor, publishedDate, bookRating, moreLink }) {

  const authorsNames = [];
  if (bookAuthor) {
    bookAuthor.forEach(function(auth) {
      authorsNames.push(auth);
    });
  }
  let authors = authorsNames.join(", ");
  
  return ( 
    <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
      <div className="card">
        <div className="card-image">
          <img src={ bookImage !== undefined ? bookImage.thumbnail : 'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg' } alt={ bookTitle } />  
        </div>  
        <div className="card-content">  
          <p className="card-title">{ bookTitle }</p> 
          <p className="card-author"><span className="title">Authors: </span>{ authors }</p> 
          <p className="card-date"><span className="title">Published Date: </span>{ publishedDate !== undefined ? publishedDate : 'Unknown' }</p>  
          <p><span className="title">Average Rating: </span>{ bookRating !== undefined ? bookRating : 'Not yet rated' }</p>
          <div>
            <a rel="noopener noreferrer" target='_blank' href={ moreLink } className="btn btn-primary" title="Know More">Know more</a>  
          </div>           
        </div>  
      </div>  
    </div> 
  )
}

export default Book
