
<template>
  <div id="app">
    <FirstComponent/>
    <Boxes/>
    <ReusableHeader :num="1"/>
    <Boxes/>
    <ReusableHeader :num="2"/>
    <Boxes/>
    <PrettyList v-for="item in items" :name="item.name" :checked="item.checked"/>
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent'
import Boxes from './components/Boxes'
import ReusableHeader from './components/ReusableHeader'
import PrettyList from './components/PrettyList'


export default {
  name: 'App',
  components: {
    FirstComponent, 
    Boxes, 
    ReusableHeader, 
    PrettyList
  }, 
  data: {
    return(){
      items : [
        {
          name : "key", 
          checked : false
        },
        {
          name : "glass", 
          checked : true
        },
        {
          name : "book", 
          checked : true
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
