<template>
  <div class="portfolio-page__div">
    <DarkModeToggle />
    <HighlightColorToggle />
    <div
      class="container portfolio-page-cards__div flex-column d-flex align-items-center justify-content-center"
    >
      <h1 class="border-bottom mb-5">Portfolio</h1>
      <div class="row py-4">
        <div class="col-12 my-4 d-flex justify-content-center" v-for="project in projects" :key="project.title">
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

.portfolio-page__div{
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}

.portfolio-page-cards__div {
  margin-top: 8rem;
  margin-bottom: 5rem;
}

.row{
  background-color: var(--highlight-one);
  border-radius: 10px;
}
</style>
