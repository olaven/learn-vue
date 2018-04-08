<template>
    <li>
        <input v-if="checked" type="checkbox" checked>
        <input v-else type="checkbox">
        {{name}}
    </li>
</template>
<script>
export default {
    name : "PrettyList", 
    props : ["name", "checked"]
}
</script>
