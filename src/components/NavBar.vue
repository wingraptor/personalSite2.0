<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="light" class="py-3">
      <router-link to="/">
        <b-navbar-brand>
          <!-- <img src="@/assets/logo_transparent.png" alt height="40" /> -->
          <span>Akono</span>
        </b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- Collapsible Menu --> 
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/portfolio">Portfolio</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
.navbar{
  background-color: #fff;
}

</style>
