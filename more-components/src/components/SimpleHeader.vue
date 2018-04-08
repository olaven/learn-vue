<template>
  <div>
    <h1 v-if="size === 1 || size == undefined">{{text}}</h1>
    <h2 v-if="size === 2">{{text}}</h2>
    <h3 v-if="size === 3">{{text}}</h3>
    <h4 v-if="size === 4">{{text}}</h4>
    <h5 v-if="size === 5">{{text}}</h5>
    <h6 v-if="size === 6">{{text}}</h6>
  </div>

</template>

<script>
export default {
    name : "SimpleHeader", 
    props : {
      text : String, 
      size : Number
    }
}
</script>

<style>
  h1{
    padding-top: 0.25em; 
    padding-bottom: 0.25em; 
    padding-right: 2em; 
    padding-left: 2em; 

    transition-duration: 0.2s; 

    background-color: whitesmoke; 
    color: #222222; 
  }
  h1:hover{
    background-color : #222222; 
    color: whitesmoke; 
  }
</style>


