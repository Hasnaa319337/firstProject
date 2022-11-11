<template>
   <the-navigation></the-navigation>
  <main>
    <router-view>
     
    </router-view>
  </main>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";


export default {
  components: {
    TheNavigation,
   
  },
  data() {
    return {};
  },
  
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 10px;
  font-family: "Roboto Condensed", sans-serif !important;
}
.container {
  margin: auto;
  width: 80%;
  overflow: hidden;
}
</style>
