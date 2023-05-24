<template>
<div>
<Navbar />
  <router-view />
  <Home />
  
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