<template>
  <div style="margin-top: 10px; display: flex; width: 100%; justify-content: space-between; flex-wrap: wrap">
    <ClothesDetail v-for="(el, i) in data" :el="el" :key="i" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ClothesDetail from './ClothesDetail';
import axios from 'axios';

export default {
  components: {
    ClothesDetail
  },
  setup() {
    const data = ref([]);

    const fetchData = async () => {
      try {
        const response = await axios.get('/all/womens');
        console.log(response);
        data.value = response.data.products;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      data
    };
  }
};
</script>
