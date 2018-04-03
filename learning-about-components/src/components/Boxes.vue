<template>
    <div id="container">
        <div class="boxes"></div>
        <div class="boxes"></div>
        <div class="boxes"></div>
        <div class="boxes"></div>
        <div class="boxes"></div>
        <div class="boxes"></div>
        <div class="boxes"></div>
        <div class="boxes"></div>
        <div class="boxes"></div>
    </div>
</template>

<script>
export default {
    name : "Boxes"
}
</script>

<style>
    .boxes:nth-child(even){
        background-color: rgb(59, 164, 136); 
    }
    .boxes:nth-child(odd){
        background-color: rgb(164, 59, 143); 
    }
    .boxes{
        display: inline-block; 
        width: 100px;
        height: 100px; 
        margin: 5px;
    }
</style>

