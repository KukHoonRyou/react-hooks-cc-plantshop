import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

/*
4. I can search for plants by their name and see a filtered list of plants.
    4-1 Create search state in closest common ancestor (??)
*/

function PlantPage() {

  const[search, setSearch] = useState("")// create closest ancestor component

  return (
    <main>
      <NewPlantForm />
      <Search search={search} setSearch={setSearch}/>
      <PlantList search = {search}/>
    </main>
  );
}

export default PlantPage;

