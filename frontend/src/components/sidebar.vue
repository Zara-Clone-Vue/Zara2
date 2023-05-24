<template>
  <div>
    <img
      src="https://icon-library.com/images/sidebar-icon/sidebar-icon-16.jpg"
      style="margin-left: 30px; width: 30px; height: 30px;"
      alt="Toggle Sidebar"
      @click="toggleSidebar"
    />

    <template v-if="sidebarVisible">
      <div class="sidebar sidebar-vertical">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link
              to="/clothes"
              style="color: black; font-family: Sans-serif; font-size: 15px; margin-left: 50px;"
            >
              All
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/kids"
              style="color: black; font-family: Sans-serif; font-size: 15px; margin-left: 50px;"
            >
              Kids
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/women"
              style="color: black; font-family: Sans-serif; font-size: 15px; margin-left: 50px;"
            >
              Women
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/men"
              style="color: black; font-family: Sans-serif; font-size: 15px; margin-left: 50px;"
            >
              Men
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/beauty"
              style="color: black; font-family: Sans-serif; font-size: 15px; margin-left: 50px;"
            >
              Beauty
            </router-link>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const sidebarVisible = ref(false);

    const toggleSidebar = () => {
      sidebarVisible.value = !sidebarVisible.value;
    };

    return {
      sidebarVisible,
      toggleSidebar
    };
  }
};
</script>

<style>
/* Add your CSS styles here */
.sidebar {
  /* Add your sidebar styles here */
}
</style>
