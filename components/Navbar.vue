<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <div class="navbar-brand">
        <nuxt-link to="/">
          <logo class="logo" />
        </nuxt-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-item" v-if="isAuthenticated">
          <a class="navbar-item" style="cursor: pointer" @click="logout">
            Logout
          </a>
        </div>
        <template v-else>
          <nuxt-link class="navbar-item" to="/login">Login</nuxt-link>
          <nuxt-link class="navbar-item" to="/">Get Started</nuxt-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";

export default {
  components: { Logo },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>
