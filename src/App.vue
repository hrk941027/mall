<template>
  <div id="app">
    
      <Maintabbar></Maintabbar>
      <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Maintabbar from './components/content/maintabbar/Maintabbar'

export default {
  name: 'App',
  components: {
    Maintabbar
  }
}
</script>

<style>
  @import "assets/css/base.css";

</style>
