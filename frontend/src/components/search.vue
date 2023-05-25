<template>
  <div>

    <div class="md-form md-outline">
      <input
        class="form-control"
        type="text"
        placeholder="Search"
        v-model="searchText"
        @input="handleSearch"
      />
    </div>
    <div class="search-results">

      <div >
<div id="app">
  <ul>
    <div class="containerimg">
            <div v-for="item in data" :key="item.id">
              
              <div >
              <img  :src="item.image" alt="" />
              <li><h3> Clothes Name : </h3>{{ item.clothesName }}</li>
              <li> <h3>The price : </h3> {{item.price}}</li>
              <li> <h3>Rating : </h3> {{item.rating}}</li>
              </div>
            </div>
            </div>
          </ul>
</div>
</div>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';


export default {

  setup() {
    const data = ref([]);
    const searchText = ref('');

    const handleSearch = (e) => {
      const query = e.target.value.trim();
      searchText.value = query;

      if (query === '') {
        data.value = [];
        return;
      }

      axios
        .get(`/search/${query}`)
        .then((response) => {
          data.value = response.data.products;
        })
        .catch((error) => console.log(error));
    };

    return {
      data,
      searchText,
      handleSearch,

};
</script>

<style>
/* Your styles here */
.md-form {
  /* Your styles here */
}

.form-control {
  /* Your styles here */
}

.search-results {
  /* Your styles here */
}

.clothes-detail {
  /* Your styles here */
}


.form-control {
  width: 100%;
  background: none;
  border:none;
  font-size: 12px;
}

</style>

