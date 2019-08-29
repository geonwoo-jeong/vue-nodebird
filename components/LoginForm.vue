<template>
  <v-container v-if="!me">
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
  <v-container v-else>
    <v-card>
      Logged In {{me.nickName}}
      <v-btn @click="onLogOut">Log Out</v-btn>
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
  computed: {
    me() {
      return this.$store.state.users.me;
    }
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("users/logIn", {
          email: this.email,
          nickName: "Jeong"
        });
      }
    },
    onLogOut() {
      this.$store.dispatch("users/logOut");
    }
  }
};
</script>

<style>
</style>