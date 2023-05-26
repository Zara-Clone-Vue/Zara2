<template>
  <div class="helpContainer">
    <div class="containerr">
    <div class="helpQ">COMMENT POUVONS-NOUS VOUS AIDER ?</div>
    <input  type="search" placeholder="RECHERCHER" class="SearchInput" 
    v-model="helpText"
    @input="getHelp"
    />
    <div class="Line">
       <div v-for="item in data" :key="item.id">
              
              <div >
              <img  :src="item.image" alt="" />
            

            <router-link to="/HelpDeatils" class="ss">
              <h3> Answer : </h3>{{ item.namehelp }}
              </router-link>
             
              </div>
            </div>
    </div>
  </div>
  </div>
</template>

<script lang=ts>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import HelpDeatils from './HelpDetails.vue';



export default {
  setup() {
    const data = ref([]);
    const helpText = ref('');

    const getHelp = (e:any) => {
      const query = e.target.value.trim();
      helpText.value = query;

      if (query === '') {
        data.value = [];
        return;
      }

      axios
        .get('http://localhost:5000/api/help')
        .then((response) => {
          data.value = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    };


    return {
      data,
      helpText,
      getHelp,
    };
  },


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
