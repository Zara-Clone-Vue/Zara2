<template>
  <div style="margin-top: 150px; display: flex; width: 100%; justify-content: space-between; flex-wrap: wrap">
    <ClothesDetail v-for="(el, i) in data" :el="el" :key="i" />
  
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ClothesDetail from './clothesDetail';
import axios from 'axios';

export default {
  components: {
    ClothesDetail
  },
  setup() {
    const data = ref([]);

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/beauty`);
        data.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };
console.log("ta9alwa")
    onMounted(() => {
      fetchData();
    });

    return {
      data
    };
  }
};
</script>

<style scoped>
/* Add your component styles here */
</style>
