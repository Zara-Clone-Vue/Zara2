<template>
  <Context.Provider :value="contextValue">
    <slot></slot>
  </Context.Provider>
</template>

<script>
import { ref, provide } from 'vue';

export const Context = Symbol('userContext');

export default {
  setup(props, { slots }) {
    const currentUser = ref({
      id: 0,
      token: '',
      isAdmin: 0
    });

    const setCurrentUser = (newUser) => {
      currentUser.value = newUser;
    };

    const logout = () => {
      currentUser.value = {
        id: 0,
        token: '',
        isAdmin: 0
      };
    };

    const contextValue = {
      currentUser: currentUser.value,
      setCurrentUser,
      logout
    };

    provide(Context, contextValue);

    return {
      contextValue
    };
  }
};
</script>
