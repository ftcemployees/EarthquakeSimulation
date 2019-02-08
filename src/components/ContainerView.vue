<template>
  <div class="container container-view-root">
    <div><slot name="title" /></div>
    <progress :value="progressValue" :max="progressMax"></progress>
    <VuePerfectScrollbar id="scrollarea" class="container-view-scroll-area">
      <slot name="content" />
    </VuePerfectScrollbar>
    <div><slot name="actions" /></div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { TweenLite } from "gsap/TweenMax";

export default {
  name: "ContainerView",
  components: { VuePerfectScrollbar },
  data() {
    return {
      canScroll: true,
      progressMax: 100,
      progressValue: 1,
      scrollArea: null,
      scrollContentHeight: 0
    };
  },
  mounted() {
    this.scrollArea = document.getElementById("scrollarea");
    this.scrollArea.addEventListener("scroll", this.handleScroll);
    this.scrollContentHeight = this.scrollArea.offsetHeight;
    this.progressMax =
      this.scrollArea.scrollHeight - this.scrollArea.offsetHeight;
  },
  watch: {
    "scrollArea.offsetHeight"(newVal) {
      this.scrollContentHeight = newVal;
      this.progressMax =
        this.scrollArea.scrollHeight - this.scrollArea.offsetHeight;
    },
    progressValue(newVal) {
      if (newVal === 0) {
        this.progressValue = 1;
      }
    }
  },
  methods: {
    handleScroll() {
      TweenLite.to(this.$data, 0.5, {
        progressValue: this.scrollArea.scrollTop
      });
      if (this.progressValue === 0) {
        this.progressValue = 1;
      }
      this.canScroll = !(
        this.scrollArea.scrollTop >=
        this.scrollArea.scrollHeight - this.scrollArea.offsetHeight
      );
    }
  }
};
</script>

<style scoped>
.container-view-root {
  margin-top: 50px;
}

.container-view-scroll-area {
  height: 70vh;
  margin: 20px 0;
}

.scroll-indicator {
  bottom: 0;
  width: 100%;
  height: 8vh;
  position: absolute;
}

progress {
  border-radius: 25px;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  width: 100%;
  height: 5px;
  /* Reset the appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* Get rid of the default border in Firefox/Opera. */
  border: none;

  /* Progress bar container for Firefox/IE10+ */
  background-color: transparent;

  /* Progress bar value for IE10+ */
  color: #541900;
}

progress::-webkit-progress-bar {
  background-color: transparent;
}

progress::-webkit-progress-value {
  background-color: #541900;
}

progress::-moz-progress-bar {
  background-color: #541900;
}
</style>
