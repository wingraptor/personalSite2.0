<template>
  <div class="home position-relative">
    <DarkModeToggle  />
    <HighlightColorToggle @highlightColor="updateHighlightColor($event)" />
    <Banner :highlightColor = "highlightColor"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import DarkModeToggle from "@/components/DarkModeToggle.vue"
import HighlightColorToggle from "@/components/HighlightColorToggle.vue"

export default {
  name: "Home",
  data(){
    return {
      highlightColor: ""
    }
  },
  components: {
    Banner,
    DarkModeToggle,
    HighlightColorToggle,
  },
  methods:{
    updateHighlightColor(color){
      this.highlightColor = color;
    }
  }
};
</script>

<style scoped>

</style>
