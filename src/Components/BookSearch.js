import React, { useState } from "react";  
import axios from 'axios';    
import Title from './Title';
import SearchBox from "./SearchBox";
import BookList from "./BookList";
import Preloader from "./Preloader";

function BookSearch() {
  const [book, setBook] = useState("")
  const [result, setResult] = useState([])
  const apiKey = process.env.REACT_APP_KEY
  const [loading, setLoading] = useState(false)

  function handleChange(event) {  
    const book = event.target.value;  
    setBook(book);  
  }

  function handleSubmit(event) {
    setLoading(true) 
    event.preventDefault(); 
    console.log(`https://www.googleapis.com/books/v1/volumes?q=${ book }&key=${ apiKey }&maxResults=40`)   
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${ book }&key=${ apiKey }&maxResults=40`)    
    .then(response => { 
      if(response.data.totalItems === 0) {
        alert("Result Not found...")
      } else {
        setLoading(false)
        setResult(response.data.items);  
      }
    }) 
    .catch(error => {
      if (error.response) {
        alert("Field is required...")
      } else if (error.request) {
        alert("No Internet Connection...")
      }
    }) 
  } 

  return (     
    <div className="main"> 
      <section className="home">
        <div className="container"> 
          <Title /> 
          <SearchBox handleChange={ handleChange } handleSubmit={ handleSubmit } />
        </div>   
      </section>
      { loading ? 
        <Preloader /> 
        :
        <section className="output">
          <BookList result={ result } /> 
        </section>
      }
    </div>    
  )
}

export default BookSearch
