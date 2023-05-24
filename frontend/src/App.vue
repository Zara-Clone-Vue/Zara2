<template>
<div>
  <Navbar />
  <Home />
  <router-view />
</div>
</template>

<script lang="ts">

import Navbar from './components/navbar.vue';

export default {
name: 'nav', 
components: {
  Navbar

},
};
</script>

<style>

</style>