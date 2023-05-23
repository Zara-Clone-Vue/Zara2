<template>
  <div class="helpContainer">
    <div class="helpQ">COMMENT POUVONS-NOUS VOUS AIDER ?</div>
    <input type="search" placeholder="RECHERCHER" class="SearchInput" />
    <div class="Line"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const data = ref([]);

    const getHelp = () => {
      axios
        .get('http://localhost:5000/api/help')
        .then((response) => {
          data.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    onMounted(getHelp);

    return {
      data
    };
  }
};
</script>

<style>
/* Add your CSS styles here */
</style>
