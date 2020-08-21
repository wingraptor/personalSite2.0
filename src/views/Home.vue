<template>
  <div class="home position-relative">
    <DarkModeToggle />
    <Banner />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import DarkModeToggle from "@/components/DarkModeToggle.vue"

export default {
  name: "Home",
  components: {
    Banner,
    DarkModeToggle
  },
};
</script>

<style scoped>
.darkmode-toggle {
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 999;
}
</style>
