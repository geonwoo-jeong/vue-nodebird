<template>
  <v-container>
    <v-card>
      <v-container>
        <v-subheader>Sign Up</v-subheader>
        <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
          <v-text-field v-model="email" label="Email" type="email" :rules="emailRules" required />
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            :rules="passwordRules"
            required
          />
          <v-text-field
            v-model="passwordConfirm"
            label="Password Confirm"
            type="password"
            :rules="passwordConfirmRules"
            required
          />
          <v-text-field
            v-model="nickName"
            label="Nickname"
            type="text"
            :rules="nickNameRules"
            required
          />
          <v-checkbox
            v-model="terms"
            label="Agree?"
            :rules="[v => !!v || 'You must agree']"
            required
          />
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
      valid: false,
      email: "",
      password: "",
      passwordConfirm: "",
      nickName: "",
      terms: false,
      emailRules: [
        v => !!v || "Email is Required",
        v => /.+@.+/.test(v) || "Email is Not Valid"
      ],
      nickNameRules: [v => !!v || "NickName is Required"],
      passwordRules: [v => !!v || "Password is Required"],
      passwordConfirmRules: [
        v => !!v || "PasswordConfirm is Required",
        v => v === this.password || "Password does not match"
      ]
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    }
  },
  watch: {
    me(value, oldValue) {
      if (value) {
        this.$router.push({
          path: "/"
        });
      }
    }
  },
  methods: {
    async onSubmitForm() {
      if (this.$refs.form.validate()) {
        try {
          const result = this.$store.dispatch("users/signUp", {
            nickName: this.nickName,
            email: this.email
          });
          if (result) {
            this.$router.push({
              path: "/"
            });
          }
        } catch (e) {
          alert("Somthing went wrong");
        }
      }
    }
  },
  head() {
    return {
      title: "Sign Up"
    };
  },
  middleware: "anonymous"
};
</script>

<style scoped>
</style>