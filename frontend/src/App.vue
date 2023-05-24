<template>
<div>
  <Navbar />

  <router-view />
</div>
</template>

<script lang="ts">

import navbar from './components/navbar.vue';

export default {
name: 'nav', 
components: {
  navbar

},
};
</script>

<style>

</style>