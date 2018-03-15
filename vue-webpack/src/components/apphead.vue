<template>
    <nav>
	<label for="show-menu" class="show-menu">Show Menu</label>
	<input type="checkbox" id="show-menu" role="button">
    <h1>Recipes</h1>
    <ul id="menu">
    <li><router-link to="/newr">Create</router-link></li>
    <li><router-link to="/">Search</router-link></li>

    </ul>
    </nav>
</template>

<script>
 export default {
     name: 'AppHeader'
 }
</script>

<style scoped>
 /*Strip the ul of padding and list styling*/
 .clear {
     float: clear;
 }
 nav {
     display: grid;
     background-color: #EDEDED;
 }
 h1
 {
 color:#FF5733;
    font-size:35px;
    text-align:left;
    margin-top:0px;
    float:left;
    margin:0px;
   // line-height:50px;
    padding-left:20px;
    position: relative;
    top:5px;

 }
 ul {
     list-style-type:none;
     margin:0;
     padding:0;
     display:inline-block;
     float:right;
     position:relative;
     top:-25px;

 }
 li {
     display:inline-block;
     float: right;
     margin-right: 1px;
 }
 li a {
     display:block;
     margin-right: 20px;
     //height: 50px;
     text-align: center;
    // line-height: 50px;
     color: #666;
 }
  li:hover a{
   color:#FF5733;

 }
 /*Style 'show menu' label button and hide it by default*/
 .show-menu {
     text-decoration: none;
     color: #fff;
     background: #FF5035;
     text-align: center;
     padding: 10px 0;
     display: none;
 }
 /*Hide checkbox*/
 input[type=checkbox]{
     display: none;
 }
 /*Show menu when invisible checkbox is checked*/
 input[type=checkbox]:checked ~ #menu{
     display: block;
 }

</style>
