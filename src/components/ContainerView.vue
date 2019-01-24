<template>
  <div class="container container-view-root">
    <div><slot name="title" /></div>
    <VuePerfectScrollbar id="scrollarea" class="container-view-scroll-area">
      <slot name="content" />
      <div v-if="canScroll" class="scroll-indicator">
        <i class="iconic" data-glyph="chevron_bottom"></i>
      </div>
    </VuePerfectScrollbar>
    <div><slot name="actions" /></div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  name: "ContainerView",
  components: { VuePerfectScrollbar },
  data() {
    return {
      canScroll: true
    };
  },
  mounted() {
    document
      .getElementById("scrollarea")
      .addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const elem = document.getElementById("scrollarea");
      this.canScroll = !(
        elem.scrollTop >=
        elem.scrollHeight - elem.offsetHeight
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
</style>
