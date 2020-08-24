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
      allowHighlightButtonColorChange: true,
      count: 0,
      highlightColorToggle: document.querySelector(".colormode-toggle"),
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
      // 'Reset' highlightbutton background color to use css variable 
      this.resetHighlightButtonColor();
      // Stop highlight button from flashing
      this.allowHighlightButtonColorChange = false;
      // Send highlight color to parent element
      this.$emit("highlightColor", highlightColor);
    },
    changeHighlightButtonColor() {
      if (this.count < 10 && this.allowHighlightButtonColorChange) {
        document.querySelector(
          ".colormode-toggle"
        ).style.backgroundColor = randomColorHsl();
        this.count++;
        window.setTimeout(() => this.changeHighlightButtonColor(), 400);
      } else {
        this.resetHighlightButtonColor()
      }
    },
    // Set highlightbutton background color to css variable
    resetHighlightButtonColor() {
      document.querySelector(".colormode-toggle").style.backgroundColor =
        "var(--highlight-one)";
    },
  },
  mounted() {
    // Start changing highlight button color
    this.changeHighlightButtonColor();
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
