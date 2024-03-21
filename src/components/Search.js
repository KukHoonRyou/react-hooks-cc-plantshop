import React, {useState} from "react";

/*
  3 main thing controlled form

  1. create state for form (state)
  2. have form values reflect state (review)
  3. create an onChange handler to update state (event)
  
*/


function Search({updateSearch}) {

  const initialForm = {
    search: ' '
  }

  const[form, setForm] = useState(initialForm)

  function handleSubmit(e) {
    e.preventDefault();
    updateSearch(form.search)
    setForm(initialForm)

  }

  function handleChange(e) {
    setForm({
      ...form, //all the things in form array
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="searchbar">
      <form  onSubmit = {handleSubmit}>
      <label htmlFor="search">Search Plants:</label>
      <input 
        type="text"
        id="search"
        name="search" // append name
        value={form.search} //append value
        placeholder="Type a name to search..."
        onChange={(e) => handleChange(e)} //pass event handler
      />
      </form>
    </div>
  );
}

export default Search;

