<template>
  <div class="slideshow-container">
    <transition-group name="slide" tag="div">
      <img
        :key="activeIndex"
        v-bind:src="imagePaths[activeIndex]"
        v-bind:alt="'Slide ' + (activeIndex + 1)"
        style="height: 100%; width: 100%"
      />
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagePaths: [
        "https://besthqwallpapers.com/Uploads/23-1-2021/153539/zara-logo-brown-plaster-background-zara-3d-logo-brands-zara-emblem.jpg",
        "https://www.swaggermagazine.com/home/wp-content/uploads/2023/03/Zara-HomePage-Landscape_W-1.jpg",
        "https://static.zara.net/photos//contents/mkt/spots/ss23-help-customer/subhome-xmedia-10-north//landscape-web-27470945-8c31-433a-9eaf-392114b6a91d_0.jpg?ts=1682518360676",
        "https://cache.marieclaire.fr/data/photo/w1200_h630_c17/1mm/histoire-zara-fast-fashion-mode.jpg",
        "https://cdn.mos.cms.futurecdn.net/4HTRrzjb6FVy9gagXeXH9P.jpg"
      ],
      activeIndex: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.imagePaths.length;
    }, 3000);
  }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
