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
      <div
        class="clothes-detail"
        v-for="el in data"
        :key="el.id"
      >
        <ClothesDetail :el="el" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import ClothesDetail from './ClothesDetail';

export default {
  components: {
    ClothesDetail,
  },
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
  },
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
</style>
