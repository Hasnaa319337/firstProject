<template>
  <header>
    <div class="heading">
      <h3>OUR SERVICES</h3>
      <h1>
        WE CREATE <br />
        BRANDS
      </h1>
      <base-button>Learn more</base-button>
    </div>
  </header>
</template>

<script>
import BaseButton from "./buttons/BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>

<style scoped>
header {
  background-image: url("../images/background.jpg");
  background-size: cover;
  background-position: 50% 50%;
  height: 90vh;
  width: 100%;
  overflow: hidden;
}
.heading {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  position: relative;
  top: 25%;
  left: 50%;
}
h3 {
  text-transform: uppercase;
  letter-spacing: 1rem;
  font-size: 1.4rem;
  font-weight: 400;
  margin: 0 auto 0 0;
}

h1 {
  text-transform: uppercase;
  font-size: 4.875rem;
  line-height: 0.8;
  font-weight: 700;
  margin: 2rem 0;
}
</style>
