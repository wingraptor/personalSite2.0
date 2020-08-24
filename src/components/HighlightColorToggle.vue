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
      highlightColor: "",
    };
  },
  methods: {
    toggleHighlightColor() {
      // Choose random highlightColor
      this.highlightColor = randomColorHsl();
      // Stop highlight button from flashing
      this.allowHighlightButtonColorChange = false;
    },
    changeHighlightButtonColor() {
      if (this.count < 10 && this.allowHighlightButtonColorChange) {
        document.querySelector(
          ".colormode-toggle"
        ).style.backgroundColor = randomColorHsl();
        this.count++;
        window.setTimeout(() => this.changeHighlightButtonColor(), 400);
      } else {
        this.resetHighlightButtonColor();
      }
    },
    // Set highlightbutton background color to css variable
    resetHighlightButtonColor() {
      document.querySelector(".colormode-toggle").style.backgroundColor =
        "var(--highlight-one)";
    },
    // Get user's saved highlight Color from local storage if available
    getUserHighlightColor() {
      if (localStorage.highlightColor) {
        this.highlightColor = localStorage.highlightColor;
        // this.$emit("highlightColor", localStorage.highlightColor);
      }
    },
    // Set the user's highlight color
    setUserHighlightColor(highlightColor) {
      localStorage.highlightColor = highlightColor;
    },
  },
  mounted() {
    // Start changing highlight button color
    this.changeHighlightButtonColor();
    this.getUserHighlightColor();
  },
  watch: {
    highlightColor(color) {
      // Update highlight color CSS variable
      document.documentElement.style.setProperty("--highlight-one", color);
      // 'Reset' highlightbutton background color to use css variable
      this.resetHighlightButtonColor();
      // Set User's highlight color to local storage
      this.setUserHighlightColor(color);
      // Send highlight color to parent element
      this.$emit("highlightColor", color);
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
