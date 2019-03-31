import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'
import uniqueId from 'react-html-id'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };

    uniqueId.enableUniqueIds(this)
  }

  render() { 
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-10">
          <div className="row">
            {
              this.recipes.map((recipe, index) => {
                return(
                  <RecipeItem
                    key = {this.getUniqueId(index.toString())}
                    title = {recipe.title}
                    ingredients = {recipe.ingredients}
                    thumbnail = {recipe.thumbnail}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
