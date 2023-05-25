<template>
  <div>
    <div class="elements">
      <div
        class="femme"

      >
        FEMME
      </div>
      <div
        class="homme"
  
      >
        HOMME
      </div>
      <div
        class="enfants"
      
      >
        ENFANTS
      </div>
    </div>
    <div class="md-form md-outline">
      <input
        class="form-control"
        type="text"
        placeholder="RECHERCHEZ UN ARTICLE, UNE COULEUR, UNE COLLECTION..."
        v-model="searchText"
        @input="handleSearch"
      />
    </div>
    <div class="line">

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

<script lang="ts">
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const data = ref([]);
    const searchText = ref("");

    const handleSearch = (e: any) => {
      const query = e.target.value.trim();
      searchText.value = query;

      if (query === "") {
        data.value = [];
        return;
      }

      axios
        .get(`http://localhost:5000/api/all`)
        .then((response) => {
          data.value = response.data;
          console.log(data.value)
        })
        .catch((error) => console.log(error));
    };

    return {
      data,
      searchText,
      handleSearch,
      hommeShow: "femme",
    };
  },

  
};
</script>

<style>
/* Your styles here */
.containerimg::after {
  content: "";
  clear: both;
  display: table;
}
.prodimg{
 float: left;
  width: 33.33%;
  padding: 5px;
}
.md-form {
  position: relative;
 
  width: 1500px;
  margin-left: 17px;
  top: 170px;
}
.line {
  border-bottom: solid 1px #000;
  width: 1500px;
  position: relative;
  top: 180px;
  margin-left: 17px;
}

.elements {
  display: flex;
  flex-direction: row;
  gap: 20px;
  position: relative;
  top: 135px;
  margin-left: 20px;
  font-size: 11px;
}
.elements:hover {
  cursor: pointer;
}

.homme:hover {
  font-weight: bold;
}

.homme.active {
  font-weight: bold;
  position: relative;
}

.homme.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: calc(43% - 1px);
  width: 8px;
  height: 1%;
  background-color: #000;
}

.femme:hover {
  font-weight: bold;
}

.femme.active {
  font-weight: bold;
  position: relative;
}

.femme.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: calc(40% - 1px);
  width: 8px;
  height: 1%;
  background-color: #000;
}

.enfants:hover {
  font-weight: bold;
}

.enfants.active {
  font-weight: bold;
  position: relative;
}

.enfants.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: calc(40% - 1px);
  width: 8px;
  height: 1%;
  background-color: #000;
}

.form-control {
  width: 100%;
  background: none;
  border:none;
  font-size: 12px;
}

</style>