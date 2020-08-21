<template>
  <div id="app">
    <!-- NavBar -->
    <!-- <NavBar /> -->

    <!-- Home Page Content -->

    <router-view />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
// import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    Footer,
    // NavBar,
  },
};
</script>

<style>

/* Change text highlight color */
::selection {
  background: #FFD700; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #FFD700; /* Gecko Browsers */
}

html,
body {
  width: 100%;
  height: 100%;
}

a {
  color: #FFD700 !important;
}

a:hover, a:active, a:focus {
  color: #77dd77 !important;
  text-decoration: none !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
}
</style>
