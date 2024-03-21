import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard";

/*
1. When the app starts, I can see all plants.
    1-1 import useState and useEffect (line 1)
    1-2 fetch from local host (line 15 - 25) (boiler??)
    1-3 use .map() for making cards for each item (line 29 - 31)
    1-3-1 passing down and using props, initializing state
    1-3-2 made it implicit, when I use return(), error occurred (why??)
    1-3-3 place key="id" for remove error (line 29) (saw it in the lecture)
*/

function PlantList({search}) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        console.error('ERROR!!')
      }
    })
    .then(data => setListings(data))
  }, []) //dependency(??) stop getting plants
  
    const filteredListings = listings.filter(plants => {
      const lowerSearch = search.toLowerCase()
      const lowerPlants = plants.name.toLowerCase()
      if(lowerPlants.includes(lowerSearch)) {
        return true
      } else {
        return false
      }
    })

  /*
  Advanced 2. I can delete a plant and it is still gone when I refresh the page.
              A2-1 create delete function
              A2-2 pass down to PlantCard
  */
  
  const deletePlants = (id) => { //filter plant out of state
    setListings(listings.filter(plants => { // create brand  new array
      if(plants.id !== id){ //if current plant does not matching id
        return true         //keep current plant
      } else {
        return false
      }
        //return item.id !== id      //short version
    }))
  }

  return (
    <ul className="cards" key="id">
      {
        filteredListings.map(plants =>
          <PlantCard 
            plants = {plants} 
            key = {plants.id} 
            deletePlants = {deletePlants} //attach event handler
          />)
      }
      
      </ul>
  );
}

export default PlantList;

