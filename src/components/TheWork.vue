<template>
  <div class="work">
    <h3>Some Work</h3>
    <div class="line"></div>
    <div class="images">
      <div class="photo" :class="animate" v-for="image in images" :key="image">
        <img :src="image" />    
     
       
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animateBlock: true,
      images: [
        "/img/ph1.8cf257ea.jpeg",
        "/img/ph2.a0e95154.jpeg",
        "/img/ph3.d5d8d6a8.jpeg",
        "/img/ph4.bb6d83b3.jpeg",
        "/img/ph8.6ae259de.jpeg",
        "/img/ph5.29c95975.jpeg",
        "/img/ph6.82d7df74.jpeg",
        "/img/ph7.3dde5fad.jpeg",
      ],
      
    };
  },
  methods() {},
};
</script>

<style scoped>
.work {
  text-align: center;

}
h3 {
  font-size: 3.75rem;
  text-transform: none;
  font-weight: 700;
  margin: 40px auto 0;
}
.line {
  width: 150px;
  height: 10px;
  margin: 25px auto 0;
  background-color: #444;
  margin-bottom: 40px;
}
.images {
  grid-template-columns: repeat(4, 25%);
  display: grid;
  margin-bottom: -3px;
}

.images .photo {
  width: 100%;
  height: 335px;
  cursor: pointer;
  background-color: #0000005e;
  z-index: 10;
  transition: all 0.3s ease-in-out;
}
.images .photo:hover {
  opacity: 0.7;
}
.images .photo img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 20.34%;
}
.animate {
  opacity: 0.2;
}
@media (max-width: 900px) {
  .images {
    grid-template-columns: repeat(2, 50%);
    display: grid;
  }
}
@media (max-width: 600px) {
  .images {
    grid-template-columns: repeat(1, 100%);
    display: grid;
  }
}
</style>
