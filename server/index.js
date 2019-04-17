const express = require('express');
let app = express();
const port = 4900;

const recipeCtrl = require("./controller")

app.use(express.json());

app.get('/recipes', recipeCtrl.get)
app.post('/recipes', recipeCtrl.create)


app.listen(port, ()=>{
  console.log("I am listening at port", port)
})