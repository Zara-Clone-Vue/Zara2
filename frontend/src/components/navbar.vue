<template>
  <div>
    <Navbar bg="white" expand="lg" variant="light" class="navbares">
      <Sidebar />
      <Container fluid>
        <Navbar.Brand>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png"
            style="margin-left: 100px; width: 200px; height: 90px;"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav class="me-auto my-2 my-lg-0" style="max-height: 100px;" navbarScroll>
            <router-link
              to="/"
              style="color: black; font-family: Sans-serif; font-size: 15px; margin-left: 50px; text-decoration: none;"
            >
              HOME
            </router-link>
          </Nav>

          <router-link
            to="/Search"
            style="color: black; font-family: Sans-serif; font-size: 15px; margin-right: 60px; text-decoration: none;"
          >
            SEARCH
          </router-link>

          <template v-if="currentUser.id === 0">
            <div style="display: flex; justify-content: space-between;">
              <router-link
                to="/login"
                style="color: black; font-family: Sans-serif; font-size: 15px; text-decoration: none;"
              >
                SIGN IN
              </router-link>
              <router-link
                to="/signup"
                style="color: black; font-family: Sans-serif; font-size: 15px; padding-left: 15px; text-decoration: none;"
              >
                SIGN UP
              </router-link>
            </div>
          </template>
          <template v-if="currentUser.id > 0">
            <router-link
              to="/"
              style="color: black; font-family: Sans-serif; font-size: 15px; text-decoration: none;"
              @click="logout"
            >
              LOGOUT
            </router-link>
          </template>
          <template v-if="currentUser.isAdmin === 1">
            <router-link
              to="/addProduct"
              style="font-family: Sans-serif; font-size: 15px; padding-left: 15px; text-decoration: none; color: black;"
            >
              Add Product
            </router-link>
          </template>
          <template v-if="currentUser.id > 0 && currentUser.isAdmin === 0">
            <router-link to="/Cart">
              <img
                src="https://cdn-icons-png.flaticon.com/512/118/118089.png"
                style="margin-right: 70px; margin-left: 80px; width: 30px; height: 30px;"
              />
            </router-link>
          </template>
          <template v-if="currentUser.id > 0 && currentUser.isAdmin === 1">
            <router-link
              to="/users"
              style="font-family: Sans-serif; font-size: 17px; padding-left: 15px; text-decoration: none; color: black;"
            >
              Admin
            </router-link>
          </template>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
</template>

<script>
import { ref, useContext } from 'vue';


export default {
  setup() {
    const { logout, currentUser } = useContext(Context);

    return {
      logout,
      currentUser
    };
  }
};
</script>

<style>
/* Add your CSS styles here */
.navbares {
  /* Add your navbar styles here */
}
</style>
