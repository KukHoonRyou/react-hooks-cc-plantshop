import React, {useState} from "react";

/*
1. When the app starts, I can see all plants.
    1-4 destructuring with item (line 9)
    1-5 for populating value, replace values in the fragments using item.something (line 12-14)
*/

/*
3. I can mark a plant as "sold out".
    3-2 import useState
    3-2 create handleClick event for sold out
    3-2 put onClick = {handleClick} to button fragments
*/


function PlantCard({ plants, deletePlants }) { //accepted as props

  const [soldOut, setSoldOut] = useState(true) //set it true for showing in stock

  
  const handleClick =() => { //toggle sold out
    setSoldOut(prev => !prev)
  }

/*
  Advanced 2. I can delete a plant and it is still gone when I refresh the page.
              A2-3 create event handler for delete plants
              A2-4 create Delete button and attach event handler
  */

  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${plants.id}`, { //write delete request
      method: 'DELETE'
    })
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        console.error('think again')
      }
    })
    // delete if DELETE request was successful
    .then(() => deletePlants(plants.id)) // empty () because nothing to return when delete no data needed
  } 
  // error occurred when I leave this line empty(???) (cannot delete tree at the home page)
  return (
    <li className="card" data-testid="plant-item">
      <img src={plants.image} alt={plants.name} />
      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>
      {soldOut ? ( //set it to my state
        <button className="primary" onClick = {handleClick}>In Stock</button> // click/un-click
      ) : (
        <button onClick = {handleClick}>Out of Stock</button> // click/un-click
        
      )}
      <button onClick = {handleDelete}>Delete</button> {/* create delete button */}
    </li>
  );
}

export default PlantCard;


