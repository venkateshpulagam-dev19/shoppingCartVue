<template>
    <div class="product-list">
      <h1>Products</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          <span>{{ product.name }} - ${{ product.price.toFixed(2) }}</span>
          <button @click="addToCart(product)">Add to Cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useCartStore } from '../stores/cart';
  
  const cartStore = useCartStore();
  
  const products = ref([
    { id: 1, name: 'Product 1', price: 10.0 },
    { id: 2, name: 'Product 2', price: 20.0 },
    { id: 3, name: 'Product 3', price: 30.0 },
  ]);
  
  const addToCart = (product: typeof products.value[0]) => {
    cartStore.addToCart(product);
  };
  </script>
  
  <style scoped>
  .product-list {
    max-width: 600px;
    margin: 20px auto;
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    padding: 5px 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #358e6c;
  }
  </style>
  