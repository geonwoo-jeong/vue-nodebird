<template>
  <v-card>
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-textarea
          v-model="content"
          outlined
          auto-grow
          clearable
          label="What's Happen?"
          :hide-details="hideDetails"
          :success-messages="successMessage"
          :success="success"
          :rules="[v => !!v.trim() || 'Please input some text.']"
          @input="onChangeTextarea"
        />
      </v-form>
      <v-btn type="submit" color="green" absolute right>Twit</v-btn>
      <v-btn>Image Upload</v-btn>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      hideDetails: false,
      successMessages: "",
      success: false,
      content: ""
    };
  },
  computed: {
    ...mapState("users", ["me"])
  },
  methods: {
    onChangeTextarea() {
      this.hideDetails = true;
    },
    onSubmitForm() {
      if (this.$ref.form.validate()) {
        this.$store
          .dispatch("posts/add", {
            content: this.content,
            User: {
              nickName: this.me.nickName
            },
            Comments: [],
            Images: [],
            id: Date.now(),
            createdAt: Date.now()
          })
          .then(() => {
            this.hideDetails = false;
            this.success = true;
            this.successMessages = "post success";
          })
          .catch(() => {});
      }
    }
  }
};
</script>

<style>
</style>