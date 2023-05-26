<template>
  
    <div class="slider">
      <nav class="navBar fixed top-0 z-10 w-full">
        <div class="flex justify-between items-center p-5">
          <div class="grid gap-1 grid-cols-2">
            <div>
            
                <svg
                  viewBox="0 0 100 80"
                  width="25"
                  height="25"
                  @click="handleToggleSidebar"
                >
                  <rect width="70" height="5"></rect>
                  <rect y="30" width="70" height="5"></rect>
                  <rect y="60" width="70" height="5"></rect>
                </svg>
              
            </div>
            <router-link to="/">
            <a>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png" />
            </a>
            </router-link>
          </div>
          <div class="left-logos">
            <div class="recherche">
            <router-link to="/search" class="ss">
              RECHERCHER
              </router-link>
            </div>

            <router-link to="/signup" class="ss">SE CONNECTER</router-link>

            <router-link to="/help" class="ss">
              AIDE
              </router-link>

            <div class ='cart'>
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                class="bi bi-bag"
                viewBox="0 0 16 16"
                style="
                width: 16px;
                height: 16px;"
              >
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>

      <div v-if="sidebarOpen" class="sidebar">
        <div class="container">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="handleToggleSidebar"
            class="closeSvg"
            style="width: 17px;
            height: 17px;"
          >
            <g id="Menu / Close_LG">
              <path
                id="Vector"
                d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>

          <div class="elements">
            <div
              class="femme"
              :class="{ active: activeDiv === 0 }"
              @click="handleDivClick(0); hommeShow = 'femme'"
            >
              FEMME
            </div>
            <div
              class="homme"
              :class="{ active: activeDiv === 1 }"
              @click="handleDivClick(1); hommeShow = 'homme'"
            >
              HOMME
            </div>
            <div
              class="enfants"
              :class="{ active: activeDiv === 2 }"
              @click="handleDivClick(2); hommeShow = 'enfants'"
            >
              ENFANTS
            </div>
            <router-link to="/beauty" >
            <div
              class="beauty"
              :class="{ active: activeDiv === 3 }"
              @click="handleDivClick(3); hommeShow = 'beauty'"
            >
              <div>BEAUTY</div>
              
            </div>
            </router-link>
          </div>
        </div>
        <div class="container1">
      <div :class="{ active: hommeShow === 'homme' }">
        <HommeCategory  v-if="hommeShow === 'homme'" />
      </div>
      <div :class="{ active: hommeShow === 'femme' }">
        <FemmeCategory v-if="hommeShow === 'femme'" />
      </div>
      <div :class="{ active: hommeShow === 'enfants' }">
        <EnfantCategory  v-if="hommeShow === 'enfants'"/>
      </div>
    </div>
      </div>

      
 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HommeCategory from './HommeCategory.vue';
import FemmeCategory from './FemmeCategory.vue';
import EnfantCategory from './EnfantCategory.vue';
import search from "./search.vue";
import help from "./HelpPage.vue"

export default defineComponent({
  data() {
    return {
      sidebarOpen: false,
      hommeShow: 'femme',
      activeDiv: 0
    };
  },
  methods: {
    handleDivClick(index: number): void {
      this.activeDiv = index;
    },
    handleToggleSidebar(): void {
      this.sidebarOpen = !this.sidebarOpen;
    }
  },
  components: {
    HommeCategory,
    FemmeCategory,
    EnfantCategory,
    search,
    help
  }
});
</script>
<style scoped>
.connecte:hover{
  cursor: pointer;
}
.recherche:hover{
  cursor: pointer;
}
.help:hover{
  cursor: pointer;
}
.cart:hover{
  cursor: pointer;
}
.navBar {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.items-center {
  align-items: center;
}

.p-5 {
  padding: 1.25rem;
}

.grid {
  display: grid;
}

.gap-1 {
  gap: 0.25rem;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.left-logos {
  display: flex;
}

.recherche {
  margin-right: 0.25rem;
}

svg {
  width: 25px;
  height: 25px;
}

.bi {
  fill: currentColor;
}

.bi-bag {
  display: inline-block;
  vertical-align: middle;
}


img[src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png"] {
  max-width: 100%;
  height: auto;
}


.sidebar {
  position: fixed;
  top: 0;
  z-index: 10;
}



img {
  width: 211.2px;
  height: 88px;
  position: relative;
  right: 41%;
}

.left-logos {
  display: flex;
  gap: 20px;
  position: relative;
  top: -30px;
  font-size: 12px;
  right: 12px;
}

.recherche {
  position: relative;
  right: 20%;
  width: 120px;
  border-bottom: solid 1px #000;
  
}
.ss {
  text-decoration: none;
  color: inherit;
}


.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 29.29vw;
  background-color: white;
  opacity: 0.98;
}

.sidebar a {
  display: fixed;
  padding: 10px;
  text-decoration: none;
  color: black;
  font-size: 12px;
}

.container {
  position: absolute;
  top: 40px;
  left: -200px;
  background: none;
  border:none;
  box-shadow: none;
  
}

.closeSvg {
  position: relative;
  top: -147px;
  left:-300px;
  opacity: 0.9;
}

.elements {
  display: flex;
  flex-direction: row;
  gap: 20px;
  position: relative;
  top: -100px;
  margin-left: -300px;
  font-size: 12px;
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
  content: '';
  position: absolute;
  bottom: 0;
  left: calc(43% - 1px); /* Adjust this value to control the width */
  width: 8px; /* Adjust this value to control the thickness */
  height: 1%; /* Adjust this value to control the height */
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
  content: '';
  position: absolute;
  bottom: 0;
  left: calc(40% - 1px); /* Adjust this value to control the width */
  width: 8px; /* Adjust this value to control the thickness */
  height: 1%; /* Adjust this value to control the height */
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
  content: '';
  position: absolute;
  bottom: 0;
  left: calc(40% - 1px); /* Adjust this value to control the width */
  width: 8px; /* Adjust this value to control the thickness */
  height: 1%; /* Adjust this value to control the height */
  background-color: #000;
}

.beauty:hover {
  font-weight: bold;
}

.beauty.active {
  font-weight: bold;
}


/* @import url("./styles.css"); */
</style>
