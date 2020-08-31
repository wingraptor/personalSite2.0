<template>
  <div class="darkmode-toggle" @click="toggleColorMode()">
    <v-icon class="darkmode-toggle__icon" name="lightbulb" scale="1.8"></v-icon>
  </div>
</template>

<script>
export default {
  name: "DarkModeToggle",
  props: {},
  data() {
    return {
      colorMode: "lightMode",
    };
  },
  methods: {
    toggleColorMode() {
      if (this.colorMode === "lightMode") {
        this.colorMode = "darkMode";
      } else if (this.colorMode === "darkMode") {
        this.colorMode = "lightMode";
      }
    },
    getColorMode() {
      if (localStorage.colorMode) {
        this.colorMode = localStorage.colorMode;
      }
    },
    setColorMode(mode) {
      localStorage.colorMode = mode;
    },
  },
  mounted() {
    this.getColorMode();
  },
  watch: {
    colorMode(mode) {
      if (mode === "darkMode") {
        console
        // Set Color of text
        document.documentElement.style.setProperty(
          "--main-text-color",
          "white"
        );
        // Set Color of background
        document.documentElement.style.setProperty(
          "--main-background-color",
          "black"
        );
        // Change color of svg pattern -> Note the use of escape characters
        // document.querySelector(".banner").style.backgroundImage =
        //   'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Cg fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')';
        this.setColorMode(mode)
      } else if(mode === "lightMode") {
        // Set Color of text
        document.documentElement.style.setProperty(
          "--main-text-color",
          "black"
        );
        // Set Color of background
        document.documentElement.style.setProperty(
          "--main-background-color",
          "white"
        );
        // Change color of svg pattern -> Note the use of escape characters
        // document.querySelector(".banner").style.backgroundImage =
        //   'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Cg fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Cpath d="M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')';
        // Update colorMode
        this.setColorMode(mode)
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.darkmode-toggle {
  color: var(--main-text-color);
  cursor: pointer;
  background-color: var(--highlight-one);
  padding: 5px;
  border-radius: 10%;
}
</style>
