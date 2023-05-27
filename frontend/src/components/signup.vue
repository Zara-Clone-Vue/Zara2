<template>
  <div class="container">
    <h1 class="h1"></h1>
    <div class="signup-form">
      <div>
        <label for="name" class="label">Username</label>
        <input type="text" id="name" v-model="username" class="input" @change="handleChange('username')" required />
      </div>
      <div>
        <label for="email" class="label">Email</label>
        <input type="email" id="email" v-model="email" class="input" @change="handleChange('email')" required />
      </div>
      <div>
        <label for="password" class="label">Password</label>
        <input type="password" id="password" v-model="password" class="input" @change="handleChange('password')" required />
      </div>
      <div>
        <label for="confPassword" class="label">Confirm Password</label>
        <input type="password" id="confPassword" v-model="confPassword" class="input" @change="handleChange('confPassword')" required />
      </div>
      <button class="button" @click="handleSubmit">Sign-up</button>
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
    const email = ref('');
console.log(username, password,email)
    const router = useRouter(); 

    const handleSubmit = async () => { 
      try {
         await axios.post('http://localhost:5000/api/users/signup', {
          username: username.value,
          email: email.value,
          password: password.value,
          adress: "Insert your address",
          isAdmin : 0 
        });
        
        router.push('/login'); 
     
      } catch (error) {
        console.error(error);
      } 
    };
    const handleChange = (field) => {
      console.log(`Field "${field}" changed: ${eval(field)}`);
    };


    return {
      username,
      email,
      password,
      handleSubmit ,
      handleChange
    };
  }
};
</script>


<style scoped>
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


.signup-form {
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

