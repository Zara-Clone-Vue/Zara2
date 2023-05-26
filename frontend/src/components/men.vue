<template>
  <div>
    <div
      style="margin-top: 150px; display: flex; width: 100%; justify-content: space-between; flex-wrap: wrap"
    >
      <div v-for="el in data" :key="el.id">
        <ClothesDetail :el="el" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ClothesDetail from './clothesDetail.vue';

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
        .get(`http://localhost:5000/api/men`)
        .then((response) => {
          this.data = response.data;
          console.log(response.data)
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
