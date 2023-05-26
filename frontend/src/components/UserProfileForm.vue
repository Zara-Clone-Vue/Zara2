
    <div v-if="isPassword">
      <label>Password:</label>
      <input type="password" v-model="newPassword" />
    </div>
    <div v-if="isAddress">
      <label>Street:</label>
      <input type="text" v-model="street" />
      <label>City:</label>
      <input type="text" v-model="city" />
      <label>State:</label>
      <input type="text" v-model="state" />
      <label>Postal Code:</label>
      <input type="text" v-model="postalCode" />
    </div>
    <button type="submit">Save</button>
  </form>
</template>

  
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'UserProfileForm',
  props: {
    email: {
      type: String,
      required: true,
    },
    isPassword: {
      type: Boolean,
      default: false,
    },
    isAddress: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const newEmail = ref('');
    const newPassword = ref('');
    const street = ref('');
    const city = ref('');
    const state = ref('');
    const postalCode = ref('');

    const handleSubmit = () => {
      if (props.isPassword) {
       
        emit('update-password', newPassword.value);
        newPassword.value = '';
      } else if (props.isAddress) {
       
        const address = {
          street: street.value,
          city: city.value,
          state: state.value,
          postalCode: postalCode.value,
        };
        emit('update-address', address);
        street.value = '';
        city.value = '';
        state.value = '';
        postalCode.value = '';
      } else {
        
        emit('update-email', newEmail.value);
        newEmail.value = '';
      }
    };

    return {
      newEmail,
      newPassword,
      street,
      city,
      state,
      postalCode,
      handleSubmit,
    };
  },
});
</script>

  