<template>
  <v-app>
    <v-toolbar dark color="green">
      <v-toolbar-items>
        <v-toolbar-title :style="{display: 'flex', alignItems: 'center'}">
          <nuxt-link to="/">NodeBird</nuxt-link>
        </v-toolbar-title>
        <v-btn nuxt to="/profile" :style="{ display: 'flex', alignItems: 'center'}">
          <div>Profile</div>
        </v-btn>
        <v-btn nuxt to="/signup" :style="{ display: 'flex', alignItems: 'center'}">
          <div>Sign Up</div>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-layout>
      <v-flex xs12 md4>
        <login-form />
      </v-flex>
      <nuxt />
    </v-layout>
  </v-app>
</template>

<script>
import LoginForm from "~/components/LoginForm";

export default {
  components: {
    LoginForm
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>