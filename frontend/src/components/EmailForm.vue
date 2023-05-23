<template>
    <form @submit.prevent="handleSubmit">
      <!-- Email form fields -->
      <div>
        <label>Current Email:</label>
        <input type="email" v-model="currentEmail" :readonly="true" />
      </div>
      <div>
        <label>New Email:</label>
        <input type="email" v-model="newEmail" />
      </div>
      <button type="submit">Save</button>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'EmailForm',
    props: {
      currentEmail: {
        type: String,
        required: true,
      },
    },
    setup(props, { emit }) {
      const newEmail = ref('');
  
      const handleSubmit = () => {
        // Perform email update logic
        const updatedEmail = newEmail.value;
        // Call an API or emit an event to update the email
        emit('update-email', updatedEmail);
        // Reset form field
        newEmail.value = '';
      };
  
      return {
        newEmail,
        handleSubmit,
      };
    },
  });
  </script>
  