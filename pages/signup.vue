<template>
  <v-container>
    <v-card>
      <v-container>
        <v-subheader>Sign Up</v-subheader>
        <v-form>
          <v-text-field label="Email" type="email" required />
          <v-text-field label="Password" type="password" required />
          <v-text-field label="Password Confirm" type="password" required />
          <v-text-field label="Nickname" type="text" required />
          <v-checkbox label="Agree?" required />
          <v-btn color="green" type="submit">Sign Up</v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "Nuxt.js"
    };
  }
};
</script>

<style scoped>
</style>