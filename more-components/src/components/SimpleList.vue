<template>
    <ul>
        <li v-for="element in elements" v-bind:key="element">{{element}}</li>
    </ul>
</template>

<script>
    export default {
        name : "SimpleList", 
        props : ["elements"]
    }
</script>

<style>
    :root{
        --dark-color: #222222; 
        --bright-color: whitesmoke; 
    }
    li{ 
        background-color: var(--dark-color); 
        color: var(--bright-color);
        
        padding: .75em;
        padding-bottom: 0.5em;
        padding-right: 0; 

        list-style: none; 
        transition-duration: 0.2s;          
    }
    li:hover{
        background-color: var(--bright-color); 
        color: var(--dark-color); 
        transform: scale(1.005);
    }
</style>