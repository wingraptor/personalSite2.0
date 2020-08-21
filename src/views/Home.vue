<template>
  <div class="home">
    <Banner />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";

export default {
  name: "Home",
  components: {
    Banner,
  },
};
</script>

<style scoped>
.home {
  /* background-image: url('../assets/background-image-2.jpg'); */
    /* background: linear-gradient(rgba(0, 0, 0, 0.164), rgba(0, 0, 0, 0.5)),
    url('../assets/5-dots.png'); */
}
</style>
