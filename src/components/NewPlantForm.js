import React, {useState} from "react";

/* 
2. I can add a new plant to the page by submitting the form. 
    2-1 import useState 
    2-2 controlled form
    2-2-1 create state for form and create initial form 
    2-2-2 set input values to state values and put values in the input fragment
    2-2-3 create onChange handler to update form state and put onChange = {(e) => handleChange(e)} to each input fragment
    2-3 create onSubmit handler to submit form and put onSubmit = {(e) => handleSubmit(e)} to form fragment
    2-4 create fetch POST request
  */

//function formatPrice (price)
//return`$${Number.parseFloat(price).toFixed(2)}`

function NewPlantForm() {
  const initialForm = {
    //no id because json server will set the id
    name: '',
    image: '',
    price: ''
  }

  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    setForm ({  
    //takes all key/value pairs form object
      ...form, //name, image, price
      [e.target.name]: e.target.value //name: some name, image: some image...
      //overwriting some previous key/value pair
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {'content-type': 'Application/JSON'},
      body: JSON.stringify(form)
    })
    .then(res => {
      if(res.ok){
        return res.json()
      }
    })
    .then(data => console.log(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {(e) => handleSubmit(e)}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          value = {form.name}
          onChange = {(e) => handleChange(e)}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value = {form.image} 
          onChange = {(e) => handleChange(e)}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price"
          value = {form.price} 
          onChange = {(e) => handleChange(e)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;


