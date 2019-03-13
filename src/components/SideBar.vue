<template>
  <div class="sidebar" v-animate-css="'fadeIn'">
    <div style="display: flex; justify-content: center">
      <div v-animate-css="'bounceInDown'" style="animation-delay: 0.5s" class="pic-container">
        <img class="profile-pic" src="../assets/profilePic.png" height="180" width="180">
      </div>
    </div>
    <div style="display: flex; justify-content: center; width: 100%">
      <div
        v-animate-css="'flipInX'"
        style="border-bottom: 1px solid white; padding-bottom: 20px; width: 90%; animation-delay: 1.3s;"
      >
        <span style="font-weight: bold">{{data.personalDetails.fullName}}</span>
        <br>
        <span style="font-size: 14px">{{data.personalDetails.position}}</span>
        <div style=" display: flex; justify-content: center">
          <a :href="data.personalDetails.linkedIn.href">
            <img class="social-media-logo" src="../assets/Linkedin.png" width="28" height="28">
          </a>
          <a :href="data.personalDetails.github.href">
            <img class="social-media-logo" src="../assets/GitHub-Mark.png" width="28" height="28">
          </a>
        </div>
      </div>
    </div>

    <div
      class="scroll-spy-div"
      v-animate-css="'flipInX'"
      style="list-style: none; position: sticky; top: 20px; padding-top: 20px; width: 100%; font-size: 18px;animation-delay: 1.3s"
    >
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
    }
  }
};
</script>