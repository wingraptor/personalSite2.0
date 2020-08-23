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

:root{
  --main-text-color:#000;
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
}

a {
  color: var(--highlight-one) !important;
}

a:hover, a:active, a:focus {
  color: var(--highlight-two) !important;
  text-decoration: none !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
}
</style>
