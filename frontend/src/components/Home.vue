<template>
  <div>
    <div class="slider">
      <nav class="navBar fixed top-0 z-10 w-full">
        <div class="flex justify-between items-center p-5">
          <div class="grid gap-1 grid-cols-2">
            <div>
              <router-link to="/" @click="handleToggleSidebar">
                <svg viewBox="0 0 100 80" width="25" height="25">
                  <rect width="70" height="5"></rect>
                  <rect y="30" width="70" height="5"></rect>
                  <rect y="60" width="70" height="5"></rect>
                </svg>
              </router-link>
            </div>
            <router-link to="/">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png" />
            </router-link>
          </div>
          <div class="left-logos">
            <div class="recherche">
              <router-link to="/search">RECHERCHER</router-link>
            </div>
            <router-link to="/login">SE CONNECTER</router-link>
            <router-link to="/help">AIDE</router-link>
            <router-link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </router-link>
          </div>
        </div>
      </nav>
      <template v-if="sidebarOpen">
        <div class="sidebar fixed top-0 z-10">
          <div class="container">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="handleToggleSidebar" class="closeSvg">
              <path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="elements">
              <div :class="{ active: activeDiv === 0, femme: true }" @click="handleDivClick(0, 'femme')">FEMME</div>
              <div :class="{ active: activeDiv === 1, homme: true }" @click="handleDivClick(1, 'homme')">HOMME</div>
              <div :class="{ active: activeDiv === 2, enfants: true }" @click="handleDivClick(2, 'enfants')">ENFANTS</div>
              <div :class="{ active: activeDiv === 3, beaty: true }" @click="handleDivClick(3, 'beauty')"><router-link to="/beauty">BEAUTY</router-link></div>
            </div>
          </div>
          <template v-if="hommeShow === 'homme'">
            <HommeCategory />
          </template>
          <template v-else-if="hommeShow === 'femme'">
            <FemmeCategory />
          </template>
          <template v-else-if="hommeShow === 'enfants'">
            <EnfantCategory />
          </template>
        </div>
      </template>
      <div class="slide">
        <video class="slide-video" autoplay loop muted>
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const sidebarOpen = ref(false);
    const hommeShow = ref('homme');
    const activeDiv = ref(0);
    const router = useRouter();

    const handleDivClick = (index, homme) => {
      activeDiv.value = index;
      hommeShow.value = homme;
    };

    const handleToggleSidebar = () => {
      sidebarOpen.value = !sidebarOpen.value;
    };

    return {
      sidebarOpen,
      hommeShow,
      activeDiv,
      handleDivClick,
      handleToggleSidebar
    };
  }
};
</script>

<style>
.slider {
  overflow: hidden;
  width:100%;
  height: 100vh;
  position: relative;
}

.slider .slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  animation: slider 12.5s infinite;
}

.slider .slide:nth-child(3) {
  background-image: url('https://static.zara.net/photos///contents/mkt/spots/ss23-north-beauty-new/subhome-xmedia-16//w/1920/IMAGE-landscape-default-fill-d06d0c41-fb7d-423f-96be-d9a4510cdab8-default_0.jpg?ts=1682077253385');
  animation-delay: -5s;
}

.slider .slide:nth-child(4) {
  background-image: url('https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-summer-camp/subhome-xmedia-19//w/1920/IMAGE-landscape-default-fill-56a3ce33-fa40-4027-8d3e-df9b1f65c531-default_0.jpg?ts=1683615240598');
  animation-delay: -7.5s;
}

.slider .slide:nth-child(5) {
  background-image: url('https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-19-2//w/1920/IMAGE-landscape-fill-9efbc54b-6ef8-4aa7-a8c1-78897dbbbf1d-default_0.jpg?ts=1683462393703');
  animation-delay: -10s;
}

.slider .slide:nth-child(6) {
  background-image: url('https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-19//w/1920/IMAGE-landscape-default-fill-c34c147e-b13b-4325-ba47-694c24f30ad9-default_0.jpg?ts=1682077191023');
  animation-delay: -12.5s;
}

.slide-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes slider {
  0% {
    opacity: 0;
  }
  12.5% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  37.5% {
    opacity: 0;
  }
}

.container1 {
  margin-top: 150px;
  position: relative;
  left: 2px;
 
}

.active {
  display: block;
}

.inactive {
  display: none;
}</style>
