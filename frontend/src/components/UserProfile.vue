<template>
  <div class="userprofile">
    <h2>User Profile</h2>
    <router-link to="/user-profile/address">Address</router-link>
    <router-link to="/user-profile/email">Email</router-link>
    <router-link to="/user-profile/password">Change Password</router-link>
    <button @click="logout">LOGOUT</button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserProfile',
  methods: {
    logout(): void {
      window.localStorage.removeItem('username');
      window.location.href="/"
    },
  },
});
</script>

<style scoped>
.userprofile {
  margin-top: 150px;
}
</style>
