<template>
  <v-container>
    <v-card>
      <v-form>
        <v-container>
          <v-text-field label="Email" type="email" required />
          <v-text-field label="Password" type="password" required />
          <v-btn color="green" type="submit">Log In</v-btn>
          <v-btn nuxt to="/signup">Sign Up</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>