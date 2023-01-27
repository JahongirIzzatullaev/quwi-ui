<template>
  <div class="admin-layout">
    <div class="projects-bar">
      <div class="projects">
        <a href="/" class="">
          <img width="30" height="30" :src="log_url" alt="logo" />
        </a>
      </div>
    </div>
    <nav class="app-navbar">
      <ul>
        <li>
          <a class="navbar-item" style="cursor: pointer" @click="logout">
            Logout
          </a>
        </li>
      </ul>
    </nav>

    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import logo from "assets/images/logo_150.png";
export default {
  name: "admin",
  data() {
    return {
      log_url: logo,
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>

<style scoped></style>
