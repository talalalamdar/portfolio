<template>
  <div class="main-page">
    <div class="sidebar" v-animate-css="'fadeIn'">
      <div v-animate-css="'bounceInDown'" style="animation-delay: 0.7s" class="pic-container">
        <img class="profile-pic" src="../assets/profilePic.png" height="180" width="180">
      </div>
      <div
        v-animate-css="'flipInX'"
        style="border-bottom: 1px solid white; padding-bottom: 20px; width: 90%; animation-delay: 1.3s"
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
      <div
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
    <div class="details-div">
      <section
        id="personal-details"
        v-animate-css="'lightSpeedIn'"
        style="animation-delay: 1s"
        class="details-section"
      >
        <span class="details-header">Personal Details</span>
        <ul style="list-style: none; line-height: 1.5">
          <li>{{data.personalDetails.fullName}}</li>
          <li>{{data.personalDetails.email}}</li>
          <li>{{data.personalDetails.phone}}</li>
          <li>{{data.personalDetails.street}}</li>
          <li>{{data.personalDetails.postCode}}</li>
        </ul>
      </section>
      <section
        id="summary"
        v-animate-css="'lightSpeedIn'"
        style="animation-delay: 1.4s"
        class="details-section"
      >
        <span class="details-header">Summary</span>
        <p>{{data.summary}}</p>
      </section>
      <section
        id="education"
        v-animate-css="'lightSpeedIn'"
        style="animation-delay: 1.8s"
        class="details-section"
      >
        <span class="details-header">Education</span>
        <br>
        <div style="padding: 20px; display: flex" v-for="(study, key) in data.education" :key="key">
          <div class="date-indicator">{{study.startDate}} - {{study.endDate}}</div>
          <div class="main-details">
            <span>{{study.title}}</span>
            <br>
            <span>{{study.subTitle}}</span>
            <br>
            <p class="details-paragraph">{{study.details}}</p>
          </div>
        </div>
      </section>
      <section
        id="experiences"
        v-animate-css="'lightSpeedIn'"
        style="animation-delay: 2.2s"
        class="details-section"
      >
        <span class="details-header">Experiences</span>
        <br>
        <div style="padding: 20px; display: flex" v-for="(job, key) in data.experiences" :key="key">
          <div class="date-indicator">{{job.startDate}} - {{job.endDate}}</div>
          <div class="main-details">
            <span>{{job.title}}</span>
            <br>
            <span>{{job.subTitle}}</span>
            <br>
            <p class="details-paragraph">{{job.details}}</p>
          </div>
        </div>
      </section>
      <section
        id="languages"
        v-animate-css="'lightSpeedIn'"
        style="animation-delay: 2.6s"
        class="details-section"
      >
        <span class="details-header">Languages</span>
        <table style="width: 100%">
          <tr>
            <th></th>
            <th>Level</th>
          </tr>
          <tr v-for="lang in data.languages" :key="lang.name">
            <td>{{lang.name}}</td>
            <td>{{lang.level}}</td>
          </tr>
        </table>
        <br>
      </section>
      <section
        id="technical-skills"
        v-animate-css="'lightSpeedIn'"
        style="animation-delay: 3s"
        class="details-section"
      >
        <span class="details-header">Technical Skills</span>
        <ul style="line-height: 1.9">
          <li v-for="skill in data.technicalSkills" :key="skill">{{skill}}</li>
        </ul>
        <!-- <font-awesome-icon icon="faJs" size="xs"></font-awesome-icon>
        <i class="faJs"></i>
        <i class="fab fa-js-square"></i>-->
      </section>
      <section
        id="projects"
        v-animate-css="'lightSpeedIn'"
        style="animation-delay: 3.3s"
        class="details-section"
      >
        <span class="details-header">Projects</span>
        <ul>
          <li v-for="project in data.projects" :key="project.name">
            <a style="font-size: 18px;" :href="project.link">{{project.name}}</a>
            <p  class="details-paragraph">{{project.description}}</p>
          </li> 
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Main",
  props: ["data"],
  methods: {
    onSectionIntersecting(event, currentItem, lastActiveItem) {
      /// logic
    },
    getSectionId: function(section) {
      return `#${section
        .toLowerCase()
        .split(" ")
        .join("-")}`;
    }
  }
};
</script>