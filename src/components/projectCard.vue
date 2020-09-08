<template>
  <b-card no-body class="component-card shadow">
    <!-- Card Image -->
    <a :href="project.url">
      <b-card-img :src="project.imgUrl" top></b-card-img>
    </a>
    <!-- Card Body -->

    <b-card-body>
      <!-- Title -->
      <a :href="project.url">
        <b-card-title align="left">{{project.title}}</b-card-title>
      </a>
      <!-- Card Body -->
      <b-card-text align="left" v-html="project.description"></b-card-text>
    </b-card-body>

    <template v-slot:footer class="d-flex">
      <a :href="project.github" class="highlighted">
        <v-icon name="brands/github" scale="1.5"></v-icon>
      </a>
      <a :href="project.url" class="highlighted">
        <v-icon name="link" scale="1.5"></v-icon>
      </a>
    </template>
  </b-card>
</template>

<script>
export default {
  name: "projectCard",
  props: ["project"],
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  max-width: 600px;
  transition: var(--transition-one);
}

.card:hover {
  box-shadow: none !important;
}
.card-footer {
  display: flex;
  justify-content: space-around;
}
.card-text {
  color: black;
}

/* .card-img-top{
  border-bottom: 1px black solid;
} */
</style>
