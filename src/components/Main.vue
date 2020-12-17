<template>
    <div class="main-page" >    <!-- v-if="!editorialStatus"  -->
      <SideBar :data="data"/>
      <div class="details-div" v-animate-css="fadeIn">
        <div class="tools-bar" style="width: 100%;margin-top: 20px">
          <eva-icon
            style="float: right; cursor: pointer; animation-delay: 0.8s"
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
          style="animation-delay: 1.2s"
          class="details-section"
        >
          <span class="details-header">Personal Details</span>
          <ul style="list-style: none; line-height: 1.5">
            <li>{{data.personalDetails.fullName}}</li>
            <li>{{data.personalDetails.email}}</li>
            <li>{{data.personalDetails.phone}}</li>
            <li>{{data.personalDetails.location}}</li>
          </ul>
        </section>
        <section
          id="summary"
          v-animate-css="'bounceInRight'"
          style="animation-delay: 1.6s"
          class="details-section"
        >
          <span class="details-header">Summary</span>
          <p style="margin-left: 30px;">{{data.summary}}</p>
        </section>
        <section
          id="experiences"
          v-animate-css="'bounceInRight'"
          style="animation-delay: 1.9s"
          class="details-section"
        >
          <span class="details-header">Experiences</span>
          <br>
          <div
            style="padding: 20px; display: flex"
            v-for="(job, key) in data.experiences"
            :key="key"
          >
            <div class="date-indicator">{{job.startDate}} - {{job.endDate}}</div>
            <div class="main-details">
              <span>{{job.title}}</span>
              <br>
              <span>{{job.subTitle}}</span>
              <br>
              <p class="details-paragraph" v-if="job.details.length > 0">{{job.details}}</p>
              <ul>
                <li class="details-paragraph" v-for="task in job.tasks" :key="task">{{task}}.</li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="education"
          v-animate-css="'bounceInRight'"
          style="animation-delay: 2.2s"
          class="details-section"
        >
          <span class="details-header">Education</span>
          <br>
          <div
            style="padding: 20px; display: flex"
            v-for="(study, key) in data.education"
            :key="key"
          >
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
          style="animation-delay: 2.5s"
          class="details-section"
        >
          <span class="details-header">Languages</span>
          <table style="width: 100%; margin-left: 30px;">
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
          style="animation-delay: 2.8s"
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
          style="animation-delay: 3.1s"
          class="details-section"
        >
          <span class="details-header">Projects</span>
          <ul>
            <li v-for="project in data.projects" :key="project.name">
              <h6 style="font-size: 18px;font-weight: 600" :href="project.link">{{project.name}}</h6>
              <p class="details-paragraph">{{project.description}}</p>
              <a
                v-if="project.link"
                class="project-link"
                :href="project.link"
              >See project</a>
              <a
                v-if="project.sourceCode"
                class="project-link"
                :href="project.sourceCode"
              >Source code link </a>
            </li>
          </ul>
        </section>
      </div>
      <div @click="handleScrollTop()" class="scroll-top-div">
        <eva-icon name="arrowhead-up" width="30px" height="30px" animation="pulse" fill="#ffffff"></eva-icon>
      </div>
    </div>
    <!-- <div
      id="editorial-div"
      class="editorial-div"
      v-animate-css="slideIn"
      v-animate-css.click="slideOut"
      style="animation-duration: 0.7s"
      v-cloak
      @click="handleEditorailClick()"
      v-show="editorialStatus"
    >
      <img class="editorial-img" src="../assets/editorial.png" alt="editorialDiv">
      <div class="editorial-block">
        <div v-cloak class="editorial-text">“Hi! I'm Talal, Thanks for checking my page!”</div>
      </div>
      <span class="editorial-help-block">Click anywhere to continue</span>
    </div> -->
</template>

<script>
import SideBar from "./SideBar.vue";

export default {
  name: "Main",
  components: {
    SideBar
  },
  props: ["data"],
  data() {
    return {
      editorialStatus: true,
      slideIn: {
        classes: "slideInDown",
        delay: 800
      },
      slideOut: {
        classes: "slideOutDown",
        delay: 10
      },
      fadeIn: {
        classes: "fadeIn",
        delay: 1000
      }
    };
  },
  methods: {
    handleScrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    printPage() {
      window.print();
    },
    handleEditorailClick: function() {
        // this.editorialStatus = false;
      // window.scrollTo({
      //   top: 0,
      //   behavior: 'smooth'
      // });
    }
  },

  mounted() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 500)
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
