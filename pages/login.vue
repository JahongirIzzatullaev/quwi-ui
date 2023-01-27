<template>
  <section class="login-section">
    <div class="login-form">
      <a href="/" class="form-logo"><logo class="logo" /></a>

      <Notification :message="error" v-if="error && !forgot_password" />

      <form method="post" @submit.prevent="doLogin" v-if="!forgot_password">
        <div class="field">
          <label class="label">Email</label>
          <input type="email" class="input" name="email" v-model="email" />
        </div>
        <div class="field">
          <label class="label">Password</label>
          <input
            type="password"
            class="input"
            name="password"
            v-model="password"
          />
        </div>
        <div class="control">
          <button type="submit" class="button">Login</button>
        </div>
        <div class="forgot-password">
          <p @click="forgot_password = true">Forgot Password ?</p>
        </div>
      </form>
      <form method="post" @submit.prevent="forgot" v-else>
        <div class="field">
          <label class="label">Email</label>
          <input type="email" class="input" name="email" v-model="email" />
        </div>
        <div class="control">
          <button type="submit" class="button">Send</button>
        </div>
        <div class="forgot-password">
          <p @click="forgot_password = false">Cancel</p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Notification from "~/components/Notification";
import Logo from "../components/Logo";

export default {
  components: {
    Logo,
    Notification,
  },
  data() {
    return {
      email: "jahongirizzatullaev@mail.ru",
      password: "Quwi1998",
      error: null,
      forgot_password: false,
      isProgress: false,
    };
  },
  middleware: "guest",
  methods: {
    forgot() {},

    async doLogin() {
      this.isProgress = true;
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        await this.$router.push("/admin");
      } catch (e) {
        this.error = e.response.data.first_errors;
      } finally {
        this.isProgress = false;
      }
    },
  },
};
</script>
