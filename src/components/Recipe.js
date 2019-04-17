import React, {Component} from "react";

export default class Recipe extends Component {
  


  render(){
    let {recipeDisplay} = this.props
    if (recipeDisplay.length > 0){
    console.log(this.props.recipeDisplay[0].ingredients)}
    let individualRecipe = recipeDisplay.map((recipe)=>{
      return (
        <div>
          <h1>{recipe.title}</h1>
          {recipe.ingredients.map((ing, i)=>{
            return (
              <div>
              <p>{ing.quantity}</p>
              <p>{ing.unit}</p>
              <p>{ing.name}</p>
              </div>
            )
          })}
        </div>
        
        
      )
      })
    
       
    return(
      <div>
        {individualRecipe}
      </div>
    )

  }
}