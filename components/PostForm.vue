<template>
  <v-card style="margin-bottom: 20px">
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-textarea
          v-model="content"
          outlined
          auto-grow
          clearable
          label="What's Happen?"
          :hide-details="hideDetails"
          :success-messages="successMessages"
          :success="success"
          :rules="[v => !!v.trim() || 'Please input some text.']"
          @input="onChangeTextarea"
        />
        <v-btn type="submit" color="green" absolute right>Twit</v-btn>
        <v-btn>Image Upload</v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      valida: false,
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
            this.content = "";
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