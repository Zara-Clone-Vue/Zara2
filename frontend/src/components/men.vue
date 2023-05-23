<template>
  <div>
    <div
      style="margin-top: 10px; display: flex; width: 100%; justify-content: space-between; flex-wrap: wrap"
    >
      <div v-for="el in data.reverse()" :key="el.id">
        <ClothesDetail :el="el" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ClothesDetail from './ClothesDetail';

export default {
  components: {
    ClothesDetail,
  },
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get(`/all/men`)
        .then((response) => {
          console.log(response);
          this.data = response.data.products;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
