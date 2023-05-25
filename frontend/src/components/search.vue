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
        <ClothesDetail :el="el" />
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
