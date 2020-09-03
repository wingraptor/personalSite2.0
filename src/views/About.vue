<template>
  <div id="about">
    <DarkModeToggle />
    <HighlightColorToggle />
    <div class="about__div container d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="col">
          <h1 class="border-bottom mb-5">About</h1>
          <div class="about__who-am-i mb-5">
            <h3 id="who-am-i">Who Am I?</h3>
            <p>Medicinal and biological chemist by degree but budding web developer by (long hours of) practice. Currently infatuated with building websites and web apps which I use as a way to express various ideas that I have in my head.</p>
          </div>

          <div class="about__knowledge mb-5">
            <h3 id="what-do-i-know">What Do I Know?</h3>
            <ul class="list-group">
              <li class="list-group-item">HTML + CSS along with knowledge of Bootstrap and Bulma</li>
              <li class="list-group-item">
                <span class="list-group__item--bold">Programming Languages</span>: Javascript and some Python
              </li>
              <li class="list-group-item">
                <span class="list-group__item--bold">Frameworks</span>: Vue.js, Express.js
              </li>
              <li class="list-group-item">
                <span class="list-group__item--bold">Databases</span>: MongoDB
              </li>
            </ul>
          </div>

          <div class="about__worked-on">
            <h3 id="what-have-i-worked-on">What Have I Worked On?</h3>

            <ul class="list-group">
              <li class="list-group-item">
                Completed
                <a
                  href="https://courses.edx.org/certificates/517d69c5d088475d9f90ef9b21043c88"
                  class="highlighted"
                  target="_blank"
                >Harvard’s CS50</a>: CS50’s Introduction to Computer Science course on edX.
              </li>
              <li class="list-group-item">
                Completed the Colt Steele Web Developer Bootcamp course on
                <a
                  href="http://ude.my/UC-9LNDKRUX"
                  target="_blank"
                  class="highlighted"
                >Udemy</a>.
              </li>
              <li class="list-group-item">
                Vist my
                <a href="/portfolio/" class="highlighted">portfolio page</a> or
                <a href="https://github.com/wingraptor"  class="highlighted" target="_blank">Github</a> to see what I’ve what I’m working on and have done so far!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import DarkModeToggle from "@/components/DarkModeToggle.vue";
import HighlightColorToggle from "@/components/HighlightColorToggle.vue";
export default {
  name: "About",
  props: {},
  components: {
    DarkModeToggle,
    HighlightColorToggle
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .darkmode-toggle {
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 999;
} */

.about__div {
  /* width: 100%; */
  margin-top: 8rem;
  margin-bottom: 5rem;
}

.list-group-item{
  background-color: var(--main-background-color);
  border: 1px solid #dee2e6;
}

.list-group__item--bold {
  font-weight: bold;
}
</style>
