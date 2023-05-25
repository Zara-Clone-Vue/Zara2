<template>
  <form @submit.prevent="handleSubmit">
    <div class="password" >
      <label>Current Password:</label>
      <input type="password" v-model="currentPassword" />
    </div>
    <div>
      <label>New Password:</label>
      <input type="password" v-model="newPassword" />
    </div>
    <button type="submit">Save</button>
  </form>
</template>
<style> 
.password {
  margin-top: 150px;

}

</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'PasswordForm',
  setup() {
    const currentPassword = ref('');
    const newPassword = ref('');

    const handleSubmit = () => {
      const updatedPassword = newPassword.value;
      axios.put('http://localhost:5000/api/password', { password: updatedPassword }) 
        .then(response => {
          console.log(response.data);
          
        })
        .catch(error => {
          console.error(error);
        
        });

      currentPassword.value = '';
      newPassword.value = '';
    };

    return {
      currentPassword,
      newPassword,
      handleSubmit,
    };
  },
});
</script>
