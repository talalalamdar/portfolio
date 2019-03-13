<template>
  <div class="main-page">
    <SideBar :data="data"/>
    <div class="details-div">
      <div class="tools-bar" style="width: 100%;margin-top: 20px">
        <eva-icon
          style="float: right; cursor: pointer; animation-delay: 1s"
          v-animate-css="'bounceInRight'"
          name="printer-outline"
          width="18px"
          title="Print"
          height="18px"
          @click="printPage()"
          animation="pulse"
          fill="#2496f4"
        ></eva-icon>
      </div>
      <section
        id="personal-details"
        v-animate-css="'bounceInRight'"
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
        v-animate-css="'bounceInRight'"
        style="animation-delay: 1.4s"
        class="details-section"
      >
        <span class="details-header">Summary</span>
        <p>{{data.summary}}</p>
      </section>
      <section
        id="experiences"
        v-animate-css="'bounceInRight'"
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
        id="education"
        v-animate-css="'bounceInRight'"
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
        id="languages"
        v-animate-css="'bounceInRight'"
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
        v-animate-css="'bounceInRight'"
        style="animation-delay: 3s"
        class="details-section"
      >
        <span class="details-header">Technical Skills</span>
        <ul style="line-height: 1.9">
          <li v-for="skill in data.technicalSkills" :key="skill">{{skill}}</li>
        </ul>
      </section>
      <section
        id="projects"
        v-animate-css="'bounceInRight'"
        style="animation-delay: 3.3s"
        class="details-section"
      >
        <span class="details-header">Projects</span>
        <ul>
          <li v-for="project in data.projects" :key="project.name">
            <a style="font-size: 18px;" :href="project.link">{{project.name}}</a>
            <p class="details-paragraph">{{project.description}}</p>
          </li>
        </ul>
      </section>
    </div>
    <div @click="handleScrollTop()" class="scroll-top-div">
      <eva-icon name="arrowhead-up" width="30px" height="30px" animation="pulse" fill="#2496f4"></eva-icon>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import SideBar from "./SideBar.vue";

export default {
  name: "Main",
  components: {
    SideBar
  },
  props: ["data"],
  methods: {
    onSectionIntersecting(event, currentItem, lastActiveItem) {
      /// logic
    },
    handleScrollTop() {
      window.location.href = "#top";
    },
    printPage() {
      window.print()
    }
  }
};
</script>