import React from 'react'

function SearchBox({ handleChange, handleSubmit }) {
  return (
    <div className="row">
      <form className="col-11 col-lg-6" onSubmit={ handleSubmit }>  
        <div className="form-group">  
          <input onChange={ handleChange } className="form-control" placeholder="Search..." type="text" />  
        </div> 
      </form>
    </div>
  )
}

export default SearchBox
