import React from "react";
import { useEffect,useState } from "react";
import './styles/app.scss';
import Recipe from './component/Recipe';



function App() {
const App_Id = "f7221484";
const API_Key = "008ca63c867119cce36c6c2f5ef9a7e9"

const [recipes , setRecipe] = useState([]);
const [search, setSearch] = useState("");
const [query , setQueries] = useState("");
useEffect(()=>{
getData();
  
     async function getData(){
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${API_Key}&from=0&to=100&calories=591-722&health=alcohol-free`)
      const data = await response.json();
      
       console.log(data.hits);
      setRecipe(data.hits);

}
},[query]);

const updateSearch = (e) =>{
  setSearch(e.target.value);
  
}

const getSearch = (e) =>{
  e.preventDefault();
  setQueries(search);
}

return (
    <div className="App">
      <div className="header">
      <h1 className='logo'>Foodies</h1>
       <form onSubmit={getSearch} className="search-form">
            <input type="text" value={search} onChange={updateSearch}/>
            <button type='submit'>Search</button>
            </form></div>
      
<div className="cards">
      
    {recipes.map(recipe =>(
      <Recipe
      key={recipe.recipe.label} 
      title = {recipe.recipe.label}
      mealType={recipe.recipe.mealType}
      img={recipe.recipe.image}
      />
    ))}
    </div>
   
    </div>
  );
}

export default App;
