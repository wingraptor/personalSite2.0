<template>
  <div id="app">
    <!-- NavBar -->
    <!-- <NavBar /> -->

    <!-- Home Page Content -->

    <router-view />
    <!-- <About /> -->

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
// import About from "@/components/About.vue";

// import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    Footer,
    // About
    // NavBar,
  },
};
</script>

<style>
:root {
  --main-text-color: #000;
  --main-background-color: #fff;
  --highlight-one: #8080ff;
  --highlight-two: #77dd77;
  --transition-one: all 0.7s ease;
}
/* Change text highlight color */
::selection {
  background: var(--highlight-one); /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: var(--highlight-one); /* Gecko Browsers */
}

html,
body {
  width: 100%;
  height: 100%;
  /* font-family: 'Lato', sans-serif; */
}

a {
  color: var(--highlight-one) !important;
}

a:hover,
a:active,
a:focus {
  color: var(--highlight-two) !important;
  text-decoration: none !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Sedgwick Ave", cursive;
  /* font-family: 'Rubik', sans-serif; */
}

.link{
  font-family: 'Shadows Into Light', cursive;
}

.darkmode-toggle {
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 999;
}

.colormode-toggle {
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 999;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  color: var(--main-text-color);
  background-color: var(--main-background-color);
  /* background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E"); */
}
</style>
