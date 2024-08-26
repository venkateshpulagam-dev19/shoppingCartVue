
<template>
  <div id="app">
     <ProductList />
     <ShoppingCart />
  </div>

</template>
<script setup lang="ts">

import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

</script>




<style scoped>
#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  padding: 20px;
}
</style>
