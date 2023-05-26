<template>
  <div class="container">
    <h2 class="heading">Sign In</h2>
    <form class="form-group" @submit.prevent="login">
      <div class="form-group">
        <label for="username" class="label">Username:</label>
        <input  id="email" v-model="username" class="input" required />
      </div>
      <div class="form-group">
        <label for="password" class="label">Password:</label>
        <input type="password" id="password" v-model="password" class="input" required />
      </div>
      <button type="submit" class="button"  @click="handleSubmit">Submit</button>
    </form>
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
        console.log( password["_value"], username["_value"]);
        const res = await axios.post('http://localhost:5000/api/users/login', {
          username: username["_value"],

          password: password["_value"]

        });
        window.localStorage.setItem('username',username["_value"] );
        console.log(username);
        window.location.href="/"
        // router.push('/');
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

<style>
.container {
  max-width: 400px;
  margin: 100px;
  margin-left: 500px;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f9f9f9;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.heading {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: #000;
  cursor: pointer;
}
</style>
