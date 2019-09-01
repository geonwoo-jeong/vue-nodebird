<template>
  <v-container>
    <v-form ref="form" v-model="valid" style="position: relative" @submit.prevent="onSubmitForm">
      <v-textarea
        v-model="content"
        filled
        auto-grow
        label="Add Comment"
        :hide-details="hideDetails"
        :success="success"
        :success-messages="successMessages"
        @input="onChangeTextarea"
      />
      <v-btn color="green" dark absolute top right type="submit">Twit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      valid: false,
      content: "",
      success: false,
      successMessages: "",
      hideDetails: true
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    }
  },
  methods: {
    onChangeTextarea(value) {
      if (value.length) {
        this.hideDetails = true;
        this.success = false;
        this.successMessages = "";
      }
    },
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("posts/addComment", {
            id: Date.now(),
            postId: this.postId,
            content: this.content,
            User: {
              nickName: this.me.nickName
            }
          })
          .then(() => {
            this.content = "";
            this.success = true;
            this.successMessages = "Comment added";
            this.hideDetails = false;
          });
      }
    }
  }
};
</script>

<style>
</style>