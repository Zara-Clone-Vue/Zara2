<template>
  <div class="pr">
    <button @click="toggleShow" class="btn">SHOW PRODUCTS</button>
    <div v-if="show && productsUser.length > 0">
      <div v-for="el in productsUser" :key="el.id">
        <div class="clothescard">
          <img :src="el.image" alt="Product Image" style="width: 100%; height: 400px" />
          <div style="display: flex; justify-content: space-between">
            <h5>{{ el.clothesName }}</h5>
            <p>{{ el.price }}£</p>
          </div>
          <button @click="handleDelete(el.id)">DELETE FROM CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const currentUser = ref(null);
    const cart = ref([]);
    const productsUser = ref([]);
    const show = ref(false);
    const count = ref(0);

    const fetch = async () => {
      const res = await axios.get(`http://${process.env.HOST}:${process.env.PORT}/cart/${currentUser.value.id}`);
      cart.value = res.data;
    };

    const fetchProduct = async () => {
      const arr = [];
      await fetch();
      if (cart.value.length > 0) {
        for (let i = 0; i < cart.value.length; i++) {
          const res = await axios.get(`http://${process.env.HOST}:${process.env.PORT}/product/${cart.value[i].product_id}`);
          arr.push(...res.data);
        }
        productsUser.value = arr;
      }
    };

    const handleDelete = async (product_id) => {
      const arr = productsUser.value.filter((e) => e.id !== product_id);
      await axios.delete(`http://${process.env.HOST}:${process.env.PORT}/cart/${product_id}`);
      productsUser.value = arr;
    };

    const toggleShow = () => {
      show.value = !show.value;
    };

    onMounted(() => {
      currentUser.value = null; // Set the current user here
      fetchProduct();
    });

    return {
      currentUser,
      productsUser,
      show,
      handleDelete,
      toggleShow,
    };
  },
};
</script>

<style scoped>
/* Add your component styles here */
.pr {
  /* Styles for the parent container */
}

.btn {
  /* Styles for the button */
}

.clothescard {
  /* Styles for the card */
}
</style>
