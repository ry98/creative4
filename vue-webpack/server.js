const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'))

let title='';
let steps=[];
let ingredients = [];
let recipes=[];

let id = 0;

app.get('/api/ingredients', (req, res) => {
  res.send(ingredients);
});
app.get('/api/steps', (req, res) => {
  res.send(steps);
});
app.get('/api/recipes', (req, res) => {
  res.send(recipes);
});
app.get('/api/title', (req, res) => {
  res.send(title);
});

app.delete('/api/recipe/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = recipes.map(item => { return item.id; }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that item doesn't exist");
    return;
  }
  recipes.splice(removeIndex, 1);
  res.sendStatus(200);
});

app.put('/api/recipes/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let itemsMap = recipes.map(item => { return item.id; });
  let index = itemsMap.indexOf(id);
  let item = recipes[index];
  item.show = req.body.show;
  recipes[index]=item;
  res.send(item);
});
app.put('/api/edit/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let itemsMap = recipes.map(item => { return item.id; });
  let index = itemsMap.indexOf(id);
  let item = recipes[index];
  ingredients=recipes[index].ingredients;
  steps=recipes[index].steps;
  title=recipes[index].title;
  recipes[index]=item;
  recipes.splice(index, 1);
  res.send(item);
});



app.post('/api/recipe', (req, res) => {
  id = id + 1;
  let recipe = {id:id, title:title,ingredients:ingredients, steps: steps, show:false};
  recipes.push(recipe);
  title='';
  steps=[];
  ingredients = [];

  res.send(recipes);
});
app.post('/api/ingredients', (req, res) => {
  id = id + 1;
  let ingredient = req.body.ingredient;
  ingredients.push(ingredient);
  res.send(ingredients);
});
app.post('/api/steps', (req, res) => {
  id = id + 1;
  let step = req.body.steps;
  steps.push(step);
  res.send(step);
});
app.post('/api/title', (req, res) => {
  id = id + 1;
  title = req.body.title;
  res.send(title);

});

app.listen(3005, () => console.log('Server listening on port 3000!'))