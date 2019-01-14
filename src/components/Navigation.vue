<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand">Earthquake Simulation</span>
    </nav>
    <div class="nav nav-tabs" id="mainTabs" role="tablist">
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
