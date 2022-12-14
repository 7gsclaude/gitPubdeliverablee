///consts and dependencies 

const express = require("express");
const drinks = require("./models/drinks.js");
const food = require('./models/food.js');
const app = express();
const port = 3000;


//routes
    app.get("/", (req, res) => { //creates welcome 
    res.send('welcome to the git pub')
})


//controller 


app.get("/drinks/:indexOfDrinksArray", (req, res) => {
  res.render("show.ejs", {
    allDrinks: drinks[req.params.indexOfDrinksArray],
  });
});




app.get("/drinks/", (req, res) => {
  //creates the drinks page
  res.render("drinks_index.ejs", {
    allDrinks: drinks, // refers only to the data object 
    allFood:food,
  });
});

// listener

app.listen(port, () => { 
    console.log(`things work in port ${port}`)
})