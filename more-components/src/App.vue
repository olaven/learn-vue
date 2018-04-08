<template>
  <div id="app">
    <SimpleHeader :text="header.text" :size="header.size"/>
    <SimpleHeadedList 
      v-for="section in sections" v-bind:key="section.header.text" 
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
      header : {
        text : "Welcome to my components!", 
        size : 1
      },
      sections : [
        {
          header : {
            text : "header 1", 
            size : 2
          }, 
          list : ['item1', 'item2']
        },
        {
          header : {
            text : "header 2", 
            size : 2
          },           
          list : ['item1', 'item2', 'item3']
        },
        {
          header : {
            text : "header 3", 
            size : 2
          },
          list : ['item1', 'item2']
        }
      ]
    }
  }
}
</script>
