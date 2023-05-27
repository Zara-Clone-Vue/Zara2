<template>
  <div class="container">
    <div class="add-form">
      <input
        class="input-name"
        type="text"
        placeholder="Clothes Name"
        v-model="product.clothesName"
      /><br/>
      <input 
        class="input-price"
        type="number"
        placeholder="Price"
        v-model="product.price"
      /><br/>
      <input
        class="input-image"
        type="text"
        placeholder="Image"
        v-model="product.image"
      /><br/>
      <input 
        class="input-category"
        type="text"
        placeholder="Category"
        v-model="product.category"
      /><br/>
      <br/>
      <br/>
      <button class="button-add" @click="add">Add Product</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const product = ref({
      clothesName: '',
      price: '',
      image: '',
      category: ''
    });

    const add = async () => {
      try {
        await axios.post(`http://localhost:5000/cart`, product.value);
        router.push('/clothes');
      } catch (error) {
        console.error(error);
      }
    };

    return {
      product,
      add
    };
  }
};
</script>

<style scoped>
.container {
  /* Add your container styles here */
}

.add-form {
  /* Add your form styles here */
}

.input-name {
  /* Add your input name styles here */
}

.input-price {
  /* Add your input price styles here */
}

.input-image {
  /* Add your input image styles here */
}

.input-category {
  /* Add your input category styles here */
}

.button-add {
  /* Add your add button styles here */
}
</style>
