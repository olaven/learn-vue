<template>
  <div id="app">
    <FirstComponent/>
    <Boxes/>
    <ReusableHeader :num="1"/>
    <Boxes/>
    <ReusableHeader :num="2"/>
    <Boxes/>
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent'
import Boxes from './components/Boxes'
import ReusableHeader from './components/ReusableHeader'


export default {
  name: 'App',
  components: {
    FirstComponent, 
    Boxes, 
    ReusableHeader
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
