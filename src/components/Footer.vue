<template>
  <div class="navbar-bottom py-3 border-top">
    <div class="navbar-bottom__div d-flex justify-content-around align-items-center">
      <b-link :active="$route.name === 'Home'" href="/" class="footer__link">
        <v-icon class="colormode-toggle__icon" name="home" scale="1.8"></v-icon>
      </b-link>
      <b-link :active="$route.name === 'Portfolio'" href="/portfolio" class="footer__link">Portfolio</b-link>
      <b-link :active="$route.name === 'About'" href="/about" class="footer__link">About</b-link>
      <b-link href="/blog" class="footer__link">Blog</b-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
  data(){
    return {
      status: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer__link {
  font-size: 1.5em;
  font-family: "Shadows Into Light", cursive;
  color: var(--highlight-one);
}

.navbar-bottom__div .link {
  font-weight: bold;
}

.active{
  color: var(--highlight-two);
}

.navbar-bottom {
  background-color: var(--main-background-color);
}
</style>
