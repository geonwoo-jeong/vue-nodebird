<template>
  <v-container>
    <v-card>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-container>
          <v-text-field v-model="email" :rules="emailRules" label="Email" type="email" required />
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          />
          <v-btn color="green" type="submit" :disabled="!valid">Log In</v-btn>
          <v-btn nuxt to="/signup">Sign Up</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      emailRules: [
        v => !!v || "Email is Required",
        v => /.+@.+/.test(v) || "Email is Not Valid"
      ],
      passwordRules: [v => !!v || "Password is Required"]
    };
  },
  methods: {
    onSubmitForm() {
      this.$refs.form.validate();
    }
  }
};
</script>

<style>
</style>