<template>
  <div style="margin-top: 150px; display: flex; width: 100%; justify-content: space-between; flex-wrap: wrap">
    <ClothesDetail v-for="(el, i) in data" :el="el" :key="i" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ClothesDetail from './clothesDetail.vue';
import axios from 'axios';

export default {
  components: {
    ClothesDetail
  },
 

  setup() {
    const data = ref([]);
//fetching the data by category and setting the result in the data
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/women');
        console.log(response);
        data.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };
//fetching the data when the component is mounted
    onMounted(() => {
      fetchData();
    });

    return {
      data
    };
  }
};
</script>
