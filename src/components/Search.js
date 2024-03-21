import React, {useState} from "react";

/*
  3 main thing controlled form

  1. create state for form (state)
  2. have form values reflect state (review)
  3. create an onChange handler to update state (event)
  
*/

/*
4. I can search for plants by their name and see a filtered list of plants.
    4-2 create event handler
*/

function Search({search, setSearch}) {

  const handleInput = e => {
    setSearch(e.target.value);
  }

  /* 
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
  */

  return (    
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
        <input 
          type="text"
          id="search"
          name="search"
          value={search} //add value
          placeholder="Type a name to search..."
          onChange={handleInput} //pass event handler
        />
    </div>
  );
}

export default Search;

