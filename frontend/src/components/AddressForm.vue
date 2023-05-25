<template>
  <form @submit.prevent="handleSubmit">
    <div class="adress">
      <label>Street:</label>
      <input type="text" v-model="street" />
    </div>
    <div>
      <label>City:</label>
      <input type="text" v-model="city" />
    </div>
    <div>
      <label>State:</label>
      <input type="text" v-model="state" />
    </div>
    <div>
      <label>Postal Code:</label>
      <input type="text" v-model="postalCode" />
    </div>
    <button type="submit">Save</button>
  </form>
</template>

<style>
.adress{
  margin-top: 150px;
}
</style>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'AddressForm',
  setup() {
    const street = ref('');
    const city = ref('');
    const state = ref('');
    const postalCode = ref('');

    const handleSubmit = () => {
      const address = {
        street: street.value,
        city: city.value,
        state: state.value,
        postalCode: postalCode.value,
      };

      axios.put('http://localhost:5000/api/address', address) 
        .then(response => {
          console.log(response.data);
         
        })
        .catch(error => {
          console.error(error);
       
        });

      street.value = '';
      city.value = '';
      state.value = '';
      postalCode.value = '';
    };

    return {
      street,
      city,
      state,
      postalCode,
      handleSubmit,
    };
  },
});
</script>
