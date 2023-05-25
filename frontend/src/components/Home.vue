<template>

 

      <div class="slide">
        <video class="slide-video" autoplay loop muted>
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>


</template>

<script lang=ts>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const hommeShow = ref('');
    const sidebarOpen = ref(false);

    const activeDiv = ref(0);
    const router = useRouter();

    const handleDivClick = (index: number, homme: string) => {
      activeDiv.value = index;
      hommeShow.value = homme;
    };


    const handleToggleSidebar = () => {
      sidebarOpen.value = !sidebarOpen.value;
    };

    return {

      hommeShow,
      sidebarOpen,
      activeDiv,
      handleDivClick,
      handleToggleSidebar,

    };
  },
};
</script>

<style>


.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  animation: slider 12.5s infinite;
}

.slide:nth-child(3) {
  background-image: url('https://static.zara.net/photos///contents/mkt/spots/ss23-north-beauty-new/subhome-xmedia-16//w/1920/IMAGE-landscape-default-fill-d06d0c41-fb7d-423f-96be-d9a4510cdab8-default_0.jpg?ts=1682077253385');
  animation-delay: -5s;
}

.slide:nth-child(4) {
  background-image: url('https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-summer-camp/subhome-xmedia-19//w/1920/IMAGE-landscape-default-fill-56a3ce33-fa40-4027-8d3e-df9b1f65c531-default_0.jpg?ts=1683615240598');
  animation-delay: -7.5s;
}

.slide:nth-child(5) {
  background-image: url('https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-19-2//w/1920/IMAGE-landscape-fill-9efbc54b-6ef8-4aa7-a8c1-78897dbbbf1d-default_0.jpg?ts=1683462393703');
  animation-delay: -10s;
}

.slide:nth-child(6) {
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
