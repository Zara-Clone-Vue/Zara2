<template>
  <div style="margin-top: 150px; display: flex; width: 100%; justify-content: space-between; flex-wrap: wrap">
    <div v-for="el in reversedData" :key="el.id">
      <ClothesDetail :el="el" />  
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ClothesDetail from './clothesDetail';

export default {
  components: {
    ClothesDetail,
  },
  data() {
    return {
      data: [],
    };
  },
  computed: {
    reversedData() {
      return this.data.slice().reverse();
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get(`http://localhost:5000/api/kids`)
        .then((response) => {
          console.log(response);
          this.data = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
