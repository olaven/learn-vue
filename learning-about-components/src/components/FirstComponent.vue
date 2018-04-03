<template>
    <div>This is {{author}}'s component!</div>
</template>

<script>
    export default {
        name : "FirstComponent", 
        data () {
            return {
                author: '@olaven'
            }
        }
    }
</script>
