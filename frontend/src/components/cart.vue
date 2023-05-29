<template>
  <div class="pr">
    
    <div  class="clothescard" v-for="el in cart" :key="el.id">
      <div class="card" style="width: 20rem; background: white; margin: 20px 10px; position: static">
        <img class="card-img-top" src="https://static.zara.net/photos///2023/V/0/1/p/2548/041/500/2/w/296/2548041500_1_1_1.jpg?ts=1678811417914" alt="Product Image" style="width: 100%; height: 400px" />
        <div class="card-body">
          <div style="display: flex; justify-content: space-between">
            <h5 class="card-title">{{ el.clothesName }}</h5>
            <p class="card-text">{{ el.price }}150 £</p>
          </div>
          <button class="btn" @click="handleDelete(el.id)">DELETE FROM CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cart: [],
      productsUser: [],
      show: false,
      count: 0,
    };
  },
  computed: {
    currentUser() {
      // Access the currentUser from Vue's context or store
      return this.$store.state.currentUser;
    },
  },
  methods: {
    async fetch() {
      const res = await axios.get(`http://localhost:5000/api/cart`);
      this.cart = res.data;
    },
    async fetchProduct() {
      const arr = [];
      await this.fetch();
      if (this.cart.length > 0) {
        for (let i = 0; i < this.cart.length; i++) {
          const res = await axios.get(`http://localhost:5000/api/cart/${this.cart[i].product_id}`);
          arr.push(...res.data);
        }
        this.productsUser = arr;
      }
    },
    async handleDelete(product_id) {
      const arr = this.productsUser.filter((e) => e.id !== product_id);
      await axios.delete(`http://localhost:5000/api/del/${product_id}`);
      this.productsUser = arr;
    },
    toggleShowProducts() {
      this.show = !this.show;
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style scoped>
.btn {
  padding: 4px 8px;
}
</style>
