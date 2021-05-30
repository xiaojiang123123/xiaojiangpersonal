<template>
  <div id="one">
    <home></home>
    </div>

</template>

<script>
import Home from '@/views/home.vue'
// import Home from '../../demo02/src/views/Home.vue'
export default {
  components: { 
    home:Home
   },

}
</script>

<style lang = "less">
  #one{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background: #eeeeee;
    /* background: url(./assets/src/bg3.png); */
  }
  

</style> 