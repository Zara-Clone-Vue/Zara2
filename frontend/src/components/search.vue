<template>
  <div>
    <div class="elements">
      <div
        class="femme"
        :class="{ active: activeDiv === 0 }"
        @click="
          handleDivClick(0);
          hommeShow = 'femme';
        "
      >
        FEMME
      </div>
      <div
        class="homme"
        :class="{ active: activeDiv === 1 }"
        @click="
          handleDivClick(1);
          hommeShow = 'homme';
        "
      >
        HOMME
      </div>
      <div
        class="enfants"
        :class="{ active: activeDiv === 2 }"
        @click="
          handleDivClick(2);
          hommeShow = 'enfants';
        "
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
      <div class="clothes-detail" v-for="el in data" key="el.id">
<div id="app">
  <ul>
    <div class="containerimg">
            <li v-for="item in data" :key="item.id">
              {{ item.clothesName }}
              <div >
              <img  :src="item.image" alt="" />
              <li>{{item.price}}</li>
              <li>{{item.rating}}</li>

              </div>
            </li>
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
      activeDiv: 0,
    };
  },

  methods: {
    handleDivClick(index: number): void {
      this.activeDiv = index;
    },
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
