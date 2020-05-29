<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    
    <Maintabbar></Maintabbar>
  </div>
</template>

<script>
import Maintabbar from '../src/components/content/maintabbar/Maintabbar'
export default {
  name:'app',
  components:{
    Maintabbar
  }
}
</script>
<style>
  @import 'assets/css/base.css';
</style>
