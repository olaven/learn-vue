<template>
    <div>
        <SimpleHeader size="2" :text="header"/>
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
    props : ["header", "list"] 
}
</script>




