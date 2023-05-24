<template>
    <div>
      <h2>User Profile</h2>
      <router-link to="/user-profile/address">Address</router-link>
      <router-link to="/user-profile/email">Email</router-link>
      <router-link to="/user-profile/password">Change Password</router-link>
      <router-view></router-view>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'UserProfile',
  });
  </script>
  