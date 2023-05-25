<template>
  <div class="card" style="width: 20rem; background: white; margin: 20px 10px; position: static">
   <router-link>
    <img :src="el.image" alt="Clothes Image" style="width: 318px; height: 400px" @click= />
    </router-link>
    <div class="card-body">
      <div style="display: flex; justify-content: space-between">
        <h5 class="card-title">{{ el.clothesName }}</h5>
        <p class="card-text">{{el.price}}£</p>
      </div>
      <button v-if="currentUser.id > 0 && currentUser.isAdmin === 0" class="btn btn-primary" @click="addToCart">
        Add to Cart
      </button>
    </div>
    <div v-if="currentUser.isAdmin === 1">
      <button @click="remove" style="background: black; border: none; color: white">DELETE</button>
      <button class="btn btn-primary" @click="handleShow" style="background: white; border: none; color: black">
        EDIT
      </button>
      <modal v-if="show" @close="handleClose">
        <h3 slot="header">Update Product</h3>
        <form slot="body" @submit.prevent="update">
          <div class="mb-3">
            <label for="clothesName" class="form-label">Clothes Name</label>
            <input
              type="text"
              class="form-control"
              id="clothesName"
              placeholder="Enter Clothes Name"
              v-model="updatedProduct.clothesName"
            />
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">Image</label>
            <input
              type="text"
              class="form-control"
              id="image"
              placeholder="Enter Image URL"
              v-model="updatedProduct.image"
            />
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input
              type="number"
              class="form-control"
              id="price"
              placeholder="Enter Price"
              v-model="updatedProduct.price"
            />
          </div>
          <div class="mb-3">
            <label for="category" class="form-label">Category</label>
            <input
              type="text"
              class="form-control"
              id="category"
              placeholder="Enter Category"
              v-model="updatedProduct.category"
            />
          </div>
        </form>
        <div slot="footer">
          <button class="btn btn-secondary" @click="handleClose">Close</button>
          <button class="btn btn-primary" style="background: black; border: none" @click="update">Update</button>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted, PropType } from 'vue';
import axios from 'axios';

 

export default {
  props: {
    el: {
      type: Object,
      required: true,
    },
    setCount: Function,
    count: Number,
   
  },
  data() {
    return {
      showLogin: false,
      show: false,
      updatedProduct: {
        id:0,
        clothesName: '',
        price: 0,
        image: '',
        category: '',
        rating: 0,
        times: 0,
      },
    };
  },
  setup(props) {
    const currentUser = ref({
  id: 0,
  isAdmin: 0,
})
     const showLogin = ref(false)
     const show = ref(false)
     const updatedProduct= ref({})
     
    // Fetch the current user data
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/a');
        currentUser.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    // Watch for changes in currentUser and count
    watch([currentUser, props.count], () => {
      // Do something when currentUser or count changes
    });

    // Lifecycle hook
    onMounted(fetchCurrentUser)
    

    const handleClose = () => (show.value = false);
    const handleShow = () => {
      show.value = true;
      updatedProduct.clothesName = props.el.clothesName;
      updatedProduct.price = props.el.price;
      updatedProduct.image = props.el.image;
      updatedProduct.category = props.el.category;
      updatedProduct.rating = props.el.rating;
      updatedProduct.count = props.el.count;
    };

    const handleChange = (e) => {
      updatedProduct[e.target.name] = e.target.value;
    };

    const update = async () => {
      try {
        await axios.put(`http://${process.env.HOST}:${process.env.PORT}/product/${props.el.id}`, updatedProduct);
        props.setCount(props.count + 1);
        handleClose();
        router.push('/clothes');
      } catch (error) {
        console.error(error);
      }
    };

    const remove = async () => {
      await axios.delete(`http://${process.env.HOST}:${process.env.PORT}/product/${props.el.id}`);
      props.setCount(props.count + 1);
    };

    const addToCart = async () => {
      if (!currentUser.value) {
        showLogin = true;
      } else {
        const payload = {
          product_id: props.el.id,
          user_id: currentUser.value.id,
        };
        console.log(payload);
        try {
          const response = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/cart`, payload);
          console.log('Product added to cart:', response.data);
        } catch (error) {
          console.error('Error adding product to cart:', error);
        }
      }
    };

    return {
      currentUser,
      showLogin,
      show,
      handleClose,
      handleShow,
      updatedProduct,
      handleChange,
      update,
      remove,
      addToCart,
    };
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
