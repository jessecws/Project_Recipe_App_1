import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });

  const handleInputChange = (event) => {
    setNewRecipe({...newRecipe, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    setRecipes([...recipes, newRecipe]);

    setNewRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" value={newRecipe.name} onChange={handleInputChange} placeholder="Name" required/>
            </td>
            <td>
              <input name="cuisine" value={newRecipe.cuisine} onChange={handleInputChange} placeholder="Cuisine" required/>
            </td>
            <td>
              <input name="photo" value={newRecipe.photo} onChange={handleInputChange} placeholder="Photo URL" required/>
            </td>
            <td>
              <textarea name="ingredients" value={newRecipe.ingredients} onChange={handleInputChange} placeholder="Ingredients" required></textarea>
            </td>
            <td>
              <textarea name="preparation" value={newRecipe.preparation} onChange={handleInputChange} placeholder="Preparation" required></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
