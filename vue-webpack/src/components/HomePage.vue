<template>
<body>

 <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"> 
    <div class="header">
    <form v-on:submit.prevent="search">
      <input type="text" v-model="input">
      <button type="submit">Search</button>
    </form>
    </div>
    <div>
    <div v-if="loading">
    <p>Loading...</p>
    </div>
    <div v-else>
   <div id="columns">
    <div  v-for="recipe in current">
    <a v-bind:href="recipe.source_url">
    <figure>
    <img v-bind:src="recipe.image_url">
    <figcaption>{{recipe.title}}</figcaption>
    </figure>
    </a>
    </div>
   </div>
   </div>
   </div>
   </div>
   <div class="footer" style="position: fixed; right: 0;bottom: 0;left: 0; padding: 1rem;background-color: white;
  text-align: center; color:gray;"><a href="https://github.com/ry98/creative3" style="color: #666;">My Github</a></div>

   </body>
</template>

<script>
 export default {

     name: 'HomePage',
     data () {

     return {
     current: {},
     loading: true,
     value:'chicken',
     input:''
              }

     },
      created: function() {
    this.recipe();
  },
  methods: {
    search: function() {
       this.value=this.input;
       this.input = '';
       this.recipe();
     },
     get_recipe: function()
     {

     },
      recipe: function() {
      fetch("https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=d5c259cb75343029d93022cf126bbaa4&q="+this.value).then(response => {
        return response.json();
      }).then(json => {
  this.current = json.recipes;
    this.loading = false;
  return true;
        }).catch(err => {
        loading=false;
      });
    },
    }

 }
</script>

<style scoped>

 @font-face{font-family:'Calluna';
 src:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/callunasansregular-webfont.woff') format('woff');
}
template
 {
 width:100%;
 }
.header
{
    width:100%;
    height:60px;
   // background-color:white;
}
h1
{
    color:#FF5733;
    font-size:35px;
    text-align:left;
    margin-top:0px;
    float:left;
    margin:0px;
    line-height:50px;
    padding-left:20px;
    font-family: 'Raleway', sans-serif;
    font-weight:bold;

   
}
button
{
    font-family: 'Raleway', sans-serif;
    background-color:#FF5733;
    color:white;
    border:none;
}

form
{
    float:right;
    display:inline-block;
    line-height:52px;
    padding-right:0px;
}
body {
    background: url("../../static/b.png");
 font-family: 'Raleway', sans-serif;
  
  height:100%;
  padding:0;
  margin:0;
  min-height: 800px;
}
#columns {
    column-width: 320px;
    column-gap: 15px;
  width: 90%;
    max-width: 1100px;
    margin: 50px auto;
}

div#columns figure {
    background: #fefefe;
    border: 2px solid #fcfcfc;
    box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
    margin: 0 2px 15px;
    padding: 15px;
    padding-bottom: 10px;
    transition: opacity .4s ease-in-out;
  display: inline-block;
  column-break-inside: avoid;
}

div#columns figure img {
    width: 100%; height: auto;
    border-bottom: 1px solid #FF5733;
    padding-bottom: 15px;
    margin-bottom: 5px;
}

div#columns figure figcaption {
  font-size: .9rem;
    color: #444;
  line-height: 1.5;
  line-color:#FF5733;
}

div#columns small { 
  font-size: 1rem;
  float: right; 
  text-transform: uppercase;
  color: #aaa;
} 

div#columns small a { 
  color: #666; 
  text-decoration: none; 
  transition: .4s color;
}

div#columns:hover figure:not(:hover) {
    opacity: 0.4;
}

@media screen and (max-width: 750px) { 
  #columns { column-gap: 0px; }
  #columns figure { width: 100%; }
}
input
{
  border:none;
  border-bottom: 2px solid #FF5733;
}
</style>
