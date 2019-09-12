<template>
  <v-container>
    <v-card style="margin-bottom: 20px">
      <v-container>
        <v-subheader>My Profile</v-subheader>
        <v-form v-model="valid" @submit.prevent="onChangeNickName">
          <v-text-field v-model="nickName" label="Nickname" :rules="nickNameRules" required />
          <v-btn color="blue" type="submit">Edit</v-btn>
        </v-form>
      </v-container>
    </v-card>
    <v-card style="margin-bottom: 20px">
      <v-subheader>Following</v-subheader>
      <follow-list :users="followingList" :remove="removeFollowing" />
    </v-card>
    <v-card style="margin-bottom: 20px">
      <v-subheader>Follower</v-subheader>
      <follow-list :users="followerList" :remove="removeFollower" />
    </v-card>
  </v-container>
</template>

<script>
import FollowList from "~/components/FollowList";

export default {
  components: {
    FollowList
  },
  data() {
    return {
      valid: false,
      nickName: "",
      nickNameRules: [v => !!v || "Please Input NickName"]
    };
  },
  computed: {
    followerList() {
      return this.$store.state.users.followerList;
    },
    followingList() {
      return this.$store.state.users.followingList;
    }
  },
  methods: {
    onChangeNickName() {
      this.$store.dispatch("users/changeNickName", {
        nickName: this.nickName
      });
    },
    removeFollowing(id) {
      this.$store.dispatch("users/removeFollowing", {
        id
      });
    },
    removeFollower(id) {
      this.$store.dispatch("users/removeFollower", {
        id
      });
    }
  },
  middleware: "authenticated"
};
</script>

<style scoped>
</style>