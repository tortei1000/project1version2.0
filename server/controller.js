let id = 1;
const recipes = [
  {
    "id": id++,
    "title": "Mushroom Pork Chops",
    "ingredients": [
      { name: "pork chops", quantity: 5, unit: "" },
      { name: "salt and pepper", quantity: 1, unit: "" },
      { name: "garlic salt chops", quantity: 1, unit: "pinch" },
      { name: "onion", quantity: 1, unit: "" },
      { name: "cream of mushroom soup", quantity: 11, unit: "ounces" }
    ],
    "imageUrl": "https://images.media-allrecipes.com/userphotos/560x315/714402.jpg",
    "directions": "Season pork chops with salt, pepper, and garlic salt to taste. In a large skillet, brown the chops over medium-high heat. Add the onion and mushrooms, and saute for one minute. Pour cream of mushroom soup over chops. Cover skillet, and reduce temperature to medium-low. Simmer 20 to 30 minutes, or until chops are cooked through.",

  },
  

]

module.exports = {

  get: (req, res) => {
    res.send(recipes)
  }
}