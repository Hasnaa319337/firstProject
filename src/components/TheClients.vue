<template>
  <section class="client">
    <div class="container">
      <div class="all">
        <div class="client">
          <h1>Our Clients</h1>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus .
            Phasellus sed efficitur dolor, <a>et ultricies sapien</a>. Quisque
            fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In
            ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
          </p>
          <base-button>Learn More</base-button>
        </div>

        <div class="brands">
          <div v-for="brand in brands" :key="brand">
            <img :src="brand" />
 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "./buttons/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      brands: [
        "/img/logo-amazon.4b0d352e.svg",
        "/img/1.d90b637f.svg",
        "/img/corol.1581fcec.svg",
        "/img/evga.d4509b99.svg",
        "/img/crocs-wordmark.db2275c3.svg",
        "/img/logo-amazon.4b0d352e.svg",
        "/img/1.d90b637f.svg",
        "/img/corol.1581fcec.svg",
        "/img/evga.d4509b99.svg",
        "/img/crocs-wordmark.db2275c3.svg",
        "/img/logo-amazon.4b0d352e.svg",
        "/img/1.d90b637f.svg",
      ],
    };
  },
};
</script>

<style scoped>
.client {
  background: black;
  color: white;
  padding: 50px 0;
}

.all {
  display: grid;
  grid-template-columns: repeat(2, 50%);
}
h1 {
  font-weight: 700;
  font-size: 3.75rem;
  margin: 0;
}
p {
  line-height: 2;
  margin: 28px 0 0;
  line-height: 2;
  margin: 28px 0 0;
  font-size: 1.1rem;
  width: 82%;
}
a {
  border-bottom: 1px solid white;
}
button {
  border: 1px solid white;
}
.brands {
  display: grid;
  grid-template-columns: repeat(3, 33%);
}
.brands div {
    padding: 16px 20px;
}
.brands img {
  width: 150px;
  height: 50px;
}
@media (max-width: 1100px) {
  .brands    {
    grid-template-columns: repeat(2, 50%);
    display: grid;
  }
}
@media (max-width: 850px) {
  .brands {
    grid-template-columns: repeat(3, 33%);
    display: grid;
  }
  .all {
  display: grid;
  grid-template-columns: repeat(1, 100%);
}
}
</style>
