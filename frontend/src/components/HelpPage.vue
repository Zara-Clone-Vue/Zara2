<template>
  <div class="helpContainer">
    <div class="containerr">
    <div class="helpQ">COMMENT POUVONS-NOUS VOUS AIDER ?</div>
    <input type="search" placeholder="RECHERCHER" class="SearchInput" />
    <div class="Line"></div>
  </div>
  </div>
</template>

<script lang=ts>
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
.helpContainer {
  position: relative;
  top:120px;
  background-image: url("https://static.zara.net/photos///contents/mkt/spots/ss23-help-customer/subhome-xmedia-10-north//w/1899/IMAGE-landscape-web-27470945-8c31-433a-9eaf-392114b6a91d-default_0.jpg?ts=1682518360676");
  background-size: cover;
  height: 100vh;
}
.containerr {
  position: relative;
  top:70px;
  margin-left: 170px;
  font-size: 15px;
  }
  .SearchInput{
    position: relative;
    top: 20px;
    background: none;
    border: none;

  }
  .Line{
  border-bottom: solid 1px #000;
  margin-top:30px;
  width: 580px;
}

</style>
