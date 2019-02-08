<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "app",
  components: {
    Navigation
  }
};
</script>

<style>
body {
  background-color: #d8d8d8;
}
</style>
