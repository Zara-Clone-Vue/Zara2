<template>
  <div class="container">
    <h2 class="heading">Sign In</h2>
    <form class="form-group" @submit.prevent="login">
      <div class="form-group">
        <label for="username" class="label">Username:</label>
        <input type="email" id="email" v-model="username" class="input" required />
      </div>
      <div class="form-group">
        <label for="password" class="label">Password:</label>
        <input type="password" id="password" v-model="password" class="input" required />
      </div>
      <button type="submit" class="button">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const username = ref('');
    const password = ref('');

    const login = async () => {
      try {
        const res = await axios.post('http://localhost:5000/api/users/login', {
          username: username.value,
          password: password.value
        });
        console.log(res.data);
       
      } catch (error) {
        console.error(error);
      
      }
    };

    return {
      username,
      password,
      login
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
