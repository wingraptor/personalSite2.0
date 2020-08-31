<template>
  <div class="navbar-bottom py-3 border-top">
    <div class="navbar-bottom__div d-flex justify-content-around align-items-center">
      <a href="/portfolio" class="footer__link">Portfolio</a>
      <a href="/about" class="footer__link">About</a>
      <a href="/blog" class="footer__link">Blog</a>
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

.footer__link{
  font-size: 1.5em;
  font-family: 'Shadows Into Light', cursive;
}

.navbar-bottom__div .link{
  font-weight: bold;
}

.navbar-bottom{
  background-color: var(--main-background-color);
}
</style>
