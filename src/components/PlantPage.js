import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

/*
4. I can search for plants by their name and see a filtered list of plants.
    4-1 Create search state in closest common ancestor (App) (??)
*/

function PlantPage({updateSearch}) {

  const[search, setSearch] = useState("") 

  


  return (
    <main>
      <NewPlantForm />
      <Search updateSearch = {updateSearch}/>
      <PlantList search = {search} setSearch = {setSearch}/>
    </main>
  );
}

export default PlantPage;

