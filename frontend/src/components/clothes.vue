<template>
  <div style="margin-top: 50px; display: flex; width: 100%; justify-content: space-between; flex-wrap: wrap">
    <clothes-detail
      v-for="(el, i) in data.slice().reverse()"
      :el="el"
      :key="i"
      :set-count="setCount"
      :count="count"
    ></clothes-detail>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import ClothesDetail from './ClothesDetail.vue';

export default {
  components: {
    ClothesDetail,
  },
  setup() {
    const data = ref([]);
    const count = ref(0);

    const fetchData = () => {
      axios
        .get(`http://${process.env.HOST}:${process.env.PORT}/all`)
        .then((response) => {
          console.log(response);
          data.value = response.data.products;
        })
        .catch((error) => console.log(error));
    };

    onMounted(fetchData);

    const setCount = (newCount) => {
      count.value = newCount;
    };

    return {
      data,
      count,
      setCount,
    };
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
