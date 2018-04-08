<template>
    <div>
        <SimpleHeader :size="header.size" :text="header.text"/>
        <SimpleList :elements="list"/>
    </div>
</template>

<script>

import SimpleHeader from './SimpleHeader'
import SimpleList from './SimpleList'

export default {
    components : {
        SimpleHeader,
        SimpleList
    },
    name : "SimpleHeadedList", 
    props : { //type validating props 
        header : Object, 
        list : Array 
    } 
}
</script>




