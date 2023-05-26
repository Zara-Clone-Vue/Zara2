<template>
  <div class="container">
    <h1 class="h1"></h1>
    <div class="signup-form">
      <div>
        <label for="name" class="label">Username</label>
        <input type="text" id="name" v-model="username" class="input-text" required />
      </div>
      <div>
        <label for="email" class="label">Email</label>
        <input type="email" id="email" v-model="email" class="input-email" required />
      </div>
      <div>
        <label for="password" class="label">Password</label>
        <input type="password" id="password" v-model="password" class="input-password" required />
      </div>
      <div>
        <label for="confPassword" class="label">Confirm Password</label>
        <input type="password" id="confPassword" v-model="confPassword" class="input-password" required />
      </div>
      <button class="signup-button" @click="handleSubmit">Sign-up</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router'; 

export default {
  setup() {
    const username = ref('');
    const password = ref('');

    const router = useRouter(); 

    const handleSubmit = async () => { 
      try {
        const res = await axios.post('http://localhost:5000/api/users/signup', {
          username: username.value,
          password: password.value
        });
        console.log(res.data);
        router.push('/login'); 
     
      } catch (error) {
        console.error(error);
      }
    };

    return {
      username,
      password,
      handleSubmit 
    };
  }
};
</script>


<style scoped>
.container {
  /* Your styles here */
}

.h1 {
  /* Your styles here */
}

.signup-form {
  /* Your styles here */
}

.label {
  /* Your styles here */
}

.input-text {
  /* Your styles here */
}

.input-email {
  /* Your styles here */
}

.input-password {
  /* Your styles here */
}

.signup-button {
  /* Your styles here */
}
</style>

