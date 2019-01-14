<template>
  <div class="container container-view-root">
    <div><slot name="title" /></div>
    <VuePerfectScrollbar class="container-view-scroll-area"
      ><slot name="content"
    /></VuePerfectScrollbar>
    <div><slot name="actions" /></div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  name: "ContainerView",
  components: { VuePerfectScrollbar }
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
</style>
