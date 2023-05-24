<template>
  <div class="admin">
    <div v-for="user in filteredUsers" :key="user.id" class="infouser">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
        alt="profile"
        class="img"
      />
      <div class="rs">
        <div class="info">
          <h4>{{ user.username }}</h4>
          <p>{{ user.email }}</p>
        </div>
        <button class="btn" @click="removeUser(user.id)">remove</button>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import styles from '../styles/users.module.css';

export default {
  setup() {
    const users = ref([]);
    const count = ref(0);

    const getAllUsers = async () => {
      try {
        const res = await axios.get('/users');
        users.value = res.data;
      } catch (error) {
        console.log(error);
      }
    };

    const removeCart = async (id) => {
      await axios.delete(`/userCart/${id}`);
    };

    const removeUser = async (id) => {
      await removeCart(id);
      await axios.delete(`/users/remove/${id}`);
      count.value += 1;
    };

    onMounted(() => {
      getAllUsers();
    });

    const filteredUsers = computed(() => {
      return users.value.filter((user) => user.isAdmin === 0);
    });

    return {
      filteredUsers,
      removeUser,
      styles,
    };
  },
};
</script>

<style scoped>
.admin {
  /* Your styles here */
}

.infouser {
  /* Your styles here */
}

.img {
  /* Your styles here */
}

.rs {
  /* Your styles here */
}

.info {
  /* Your styles here */
}

.btn {
  /* Your styles here */
}
</style>
