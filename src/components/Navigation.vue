<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand">Earthquake Simulation</span>
    </nav>
    <div class="container nav nav-tabs" id="mainTabs" role="tablist">
      <router-link class="nav-item nav-link active" id="home-tab" to="/home">
        Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped>
.bg-dark {
  background-color: black;
}

.nav-link active {
  background-color: #efefef;
}

#mainTabs {
  padding-left: 0;
  color: black;
}
</style>
