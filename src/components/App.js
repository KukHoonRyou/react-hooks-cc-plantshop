import React, {useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


function App() {

  const[search, setSearch] = useState("") // create closest ancestor component

  // const updateSearch = (value) => {
  //   setSearch(value)               //short and clean version is down there inside Search fragment
  // }

  return (
    <div className="app">
      <Header />
      <PlantPage updateSearch = {(value) => {setSearch(value)}} search = {search}/>
    </div>
  );
}

export default App;

