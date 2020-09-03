<template>
  <div class="portfolio-page__div">
    <DarkModeToggle />
    <HighlightColorToggle />
    <div
      class="container portfolio-page-cards__div flex-column d-flex align-items-center justify-content-center"
    >
      <h1 class="border-bottom mb-5">Portfolio</h1>
      <div class="row">
        <div class="col-12 my-5 d-flex justify-content-center" v-for="project in projects" :key="project.title">
          <projectCard :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DarkModeToggle from "@/components/DarkModeToggle.vue";
import HighlightColorToggle from "@/components/HighlightColorToggle.vue";
import projectCard from "@/components/projectCard.vue";
import projects from "@/assets/projects.js";

export default {
  name: "Home",
  data() {
    return {
      projects,
    };
  },
  components: {
    DarkModeToggle,
    HighlightColorToggle,
    projectCard,
  },
  methods: {},
};
</script>

<style scoped>
.portfolio-page-cards__div {
  margin-top: 8rem;
  margin-bottom: 5rem;
}
</style>
