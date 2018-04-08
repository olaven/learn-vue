<template>
  <div id="app">
    <SimpleHeader :text="header"/>
    <SimpleHeadedList 
      v-for="section in sections" v-bind:key="section.header" 
      :header="section.header" :list="section.list"
    />
  </div>
</template>

<script>
import SimpleHeader from './components/SimpleHeader'
import SimpleHeadedList from './components/SimpleHeadedList'

export default {
  name: 'App',
  components: {
    SimpleHeader, 
    SimpleHeadedList
  }, 
  data(){
    return {
      header : "Welcome to my components!",
      sections : [
        {
          header : "header 1", 
          list : ['item1', 'item2']
        },
        {
          header : "header 2", 
          list : ['item1', 'item2', 'item3']
        },
        {
          header : "header 3", 
          list : ['item1', 'item2']
        }
      ]
    }
  }
}
</script>
