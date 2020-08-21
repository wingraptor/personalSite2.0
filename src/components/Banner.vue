<template>
  <!-- w-100 d-flex justify-content-center align-items-center -->
  <div
    class="banner w-100 h-100 d-flex justify-content-center align-items-center position-relative"
  >
    <div class="banner__div text-dark">
      <h1 class="title">Akono Brathwaite</h1>
      <p class="subtitle">Web Developer</p>
      <a class="mx-2" href="https://www.linkedin.com/in/akono-brathwaite-a0446297">
        <v-icon name="brands/linkedin" scale="2.5"></v-icon>
      </a>
      <a class="mx-2" href="https://github.com/wingraptor">
        <v-icon name="brands/github" scale="2.5"></v-icon>
      </a>
    </div>
    <vue-particles
      color="#FFD700"
      hoverMode="repulse"
      shapeType="star"
      :lineLinked="false"
      :particlesNumber="80"
      :particleSize="6"
      class="particles-js"
    ></vue-particles>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.banner__div {
  z-index: 999;
}

.banner__div h1 {
  text-shadow: 3px 3px #000;
  color: #000;
  font-size: 7rem;
}

.banner__div .subtitle {
  font-size: 1.7rem;
  color: #000;
  font-weight: bold;
}

.particles-js {
  /* background-color: #ffffff; */
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 767px) {
  .banner__div h1 {
    font-size: 3rem;
  }
  .banner__div .subtitle {
    font-size: 1rem;
  }
}
</style>
