<template>
    <div class="shopping-cart">
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="item in cartItems" :key="item.id" class="cart-item">
            <span>{{ item.name }} - ${{item.price.toFixed(2) }}</span>
             <button @click="removeFromCart(item.id)">Remove</button>
             </li>
        </ul>
        <p v-if="cartCount === 0">Your cart is empty</p>
        <p v-else>Total: ${{ total.toFixed(2) }}</p>
    </div>
</template>
<script setup lang="ts">    
import { useCartStore } from '../stores/cart'; 
const cartStore = useCartStore(); 
const cartItems = cartStore.cartItems;
 const cartCount = cartStore.cartCount; 
 const total = cartStore.total; 
 const removeFromCart = (id: number) => { cartStore.removeFromCart(id); };
 
 </script>
<style scoped>
    .shopping-cart {
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

    .cart-item {
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
        background-color: #e74c3c;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #c0392b;
    }

    p {
        text-align: center;
        font-weight: bold;
        margin-top: 20px;
    }
</style>