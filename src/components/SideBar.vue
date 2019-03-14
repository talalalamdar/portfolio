<template>
  <div class="sidebar" v-animate-css="'fadeIn'">
    <div style="display: flex; justify-content: center">
      <div v-animate-css="'bounceInDown'" style="animation-delay: 0.5s" class="pic-container">
        <img class="profile-pic" src="../assets/profilePic.png" height="180" width="180">
      </div>
    </div>
    <div style="display: flex; justify-content: center; width: 100%">
      <div v-animate-css="'flipInX'" class="personal-details-sidebar">
        <span style="font-weight: bold">{{data.personalDetails.fullName}}</span>
        <br>
        <span style="font-size: 14px">{{data.personalDetails.position}}</span>
        <span style="display: block; font-size: 11px;">
          <img src="../assets/location.png" style="margin-top: 10px;" width="15" height="15">
          <span>{{' '}}{{data.personalDetails.location}}</span>
        </span>
        <div class="contact-icons" style=" display: flex; justify-content: center">
          <a :href="data.personalDetails.linkedIn.href">
            <img class="social-media-logo" src="../assets/Linkedin.png" width="28" height="28">
          </a>
          <a :href="data.personalDetails.github.href">
            <img class="social-media-logo" src="../assets/GitHub-Mark.png" width="28" height="28">
          </a>
          <a href="javascript:void(0)" @click="sendEmail()">
            <img class="social-media-logo" src="../assets/email.png" width="28" height="28">
          </a>
        </div>
      </div>
    </div>

    <div class="scroll-spy-div" v-animate-css="'flipInX'">
      <scrollactive active-class="active" bezier-easing-value=".5,0,.35,1">
        <li class="content-item" v-for="section in data.sections" :key="section">
          <a :href="getSectionId(section)" class="scrollactive-item">{{section}}</a>
        </li>
      </scrollactive>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: ["data"],
  methods: {
    getSectionId: function(section) {
      return `#${section
        .toLowerCase()
        .split(" ")
        .join("-")}`;
    },
    sendEmail: function() {
      window.open("mailto:talalalamdar@gmail.com");
    }
  }
};
</script>