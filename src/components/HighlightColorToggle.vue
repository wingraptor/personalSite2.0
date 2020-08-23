<template>
  <div class="colormode-toggle" @click="toggleHighlightColor()">
    <v-icon class="colormode-toggle__icon" name="paint-brush" scale="1.8"></v-icon>
  </div>
</template>

<script>
import { randomColorHsl } from "@/assets/helperFunctions.js";

export default {
  name: "HighlightColorToggle",
  props: {},
  data() {
    return {
    };
  },
  methods: {
    toggleHighlightColor() {
      // Choose random highlightColor
      const highlightColor = randomColorHsl();
      // Update highlight color CSS variable
      document.documentElement.style.setProperty(
        "--highlight-one",
        highlightColor
      );
      // Send highlight color to parent element
      this.$emit("highlightColor", highlightColor);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.colormode-toggle {
  color: var(--main-text-color);
  cursor: pointer;
  background-color: var(--highlight-one);
  padding: 5px;
  border-radius: 10%;
}
</style>
