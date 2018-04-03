<template>
    <h1>{{num}} This header is reusable</h1>
</template>

<script>
export default {
    name : "ReusableHeader", 
    props : ["num"]
}
</script>

<style>
    h1{
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
        font-size: 2em; 
    }
</style>


