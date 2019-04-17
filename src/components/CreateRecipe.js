import React, { Component } from "react"
import axios from "axios"

export default class CreateRecipe extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      ingredients: [{ name: "", quantity: 0, unit: "" }],
      imageUrl: "",
      directions: ""
    }
  }

  handleChange = e => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let newRecipe = this.state
    this.createRecipe(newRecipe)
  }

  createRecipe = (newRecipe) => {
    axios.post("/recipes", newRecipe).then(res => {
    }).catch(err => console.log("error", err))
  }

  render() {
    return (
      <div>
        <input name="title" onChange={this.handleChange} />
        <input name="imageUrl" onChange={this.handleChange} />
        <input name="directions" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
        
      </div>
    )
  }

}