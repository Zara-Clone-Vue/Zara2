<template>
  <form @submit.prevent="handleSubmit">
   
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
import axios from 'axios';

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
      const updatedEmail = newEmail.value;
      axios.put('http://localhost:5000/api/email', { email: updatedEmail }) 
        .then(response => {
          console.log(response.data);
         
        })
        .catch(error => {
          console.error(error);
          
        });

      newEmail.value = '';
    };

    return {
      newEmail,
      handleSubmit,
    };
  },
});
</script>
