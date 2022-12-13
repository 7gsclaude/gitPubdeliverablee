///consts and dependencies 

const express = require("express");
const drinks = require("./models/drinks.js");
const app = express();
const port = 3000;


//routes
    app.get("/", (req, res) => { //creates welcome 
    res.send('welcome to the git pub')
})

app.get("/drinks/", (req, res) => { //creates the drinks page 
    res.render('drinks_index.ejs', { 
    allDrinks: drinks[req.params.indexOfDrinksArray] // should give me access to alldrinks in the HTML now 
    })
})

//controller 

app.get('/drinks/:indexOfDrinksArrary', (res, req) => {
  res.send(drinks[req.params.indexOfDrinksArray]);
})

// listener

app.listen(port, () => { 
    console.log(`things work in port ${port}`)
})