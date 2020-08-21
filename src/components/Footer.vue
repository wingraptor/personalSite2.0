<template>
  <div class="navbar-bottom py-3">
    <div class="navbar-bottom__div d-flex justify-content-around align-items-center">
      <a target="_blank" href="/portfolio" class="link">Portfolio</a>
      <a target="_blank" href="/about" class="link">About</a>
      <a target="_blank" href="/blog" class="link">Blog</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar-bottom__div .link{
  font-weight: bold;
}
</style>
