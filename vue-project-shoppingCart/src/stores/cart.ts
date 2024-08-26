import {defineStore} from 'pinia';
import {ref, computed} from 'vue';

interface Product{ 
    id:number;
    name:string;
    price:number;
}

export const useCartStore = defineStore('cart', ()=>{

 const cartItems = ref<Product[]>([]);

 const addToCart = (product:Product) => {
    cartItems.value.push(product);
 };

const removeFromCart = (productId:number)=>{
    cartItems.value = cartItems.value.filter(item=>item.id !==productId);
};

const total = computed(()=> 
    cartItems.value.reduce((acc, item) => acc + item.price, 0)
);

const cartCount = computed(()=> cartItems.value.length);

return {
    
    cartItems,
    addToCart,
    removeFromCart,
    total,
    cartCount
}


});