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
    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(e){
    this.setState({
      searchString: e.target.value
    })
  }

  render() { 
    return (
      <div className="App">
        <Navbar update={this.updateSearch}/>
        <div className="container mt-10">
          <div className="row">
            {
              this.recipes.filter(
                recipe => (
                  recipe.title.toLowerCase().includes(this.state.searchString.toLowerCase())
                  ||
                  recipe.ingredients.toLowerCase().includes(this.state.searchString.toLowerCase())
                )
              ).map((searchedRecipe, index) => {
                return(
                  <RecipeItem
                    { ...searchedRecipe }
                    key = {this.getUniqueId(index.toString())}
                    searchedText = {this.state.searchString}
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
