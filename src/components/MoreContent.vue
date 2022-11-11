<template>
  <div class="content">
    <section class="container">
      <div class="whiteCircle">
        <div class="bigPhoto">
          <div class="parts">
            <div class="part"></div>
            <div class="part" v-for="image in imgParts" :key="image.id">
              <img :src="image.img" />
              <p class="mainP">Sample text. Click to select the text box.</p>
              <p class="moreRead" @close="hideMore" v-if="lessIsvisable">
                Click to select the text box. Click again or double click to
                start editing the text .
              </p>
              <more-button @click="showMore" v-if="!lessIsvisable" id={{image.id}}>More</more-button>
              <more-button @click="hideMore"  v-else >Less</more-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MoreButton from "./buttons/MoreButton.vue";
export default {
  components: { MoreButton },
  data() {
    return {
      lessIsvisable: false,
      imgParts: [
        {id:1 , img:"/img/one.fb0af8f2.jpg"},
        {id:2 , img:"/img/two.4baff782.jpg"},
        {id:3 , img:"/img/three.c7a59994.jpg"},
      ],
    };
  },
  methods: {
    showMore() {
      this.lessIsvisable = true;
    },
    hideMore() {
      this.lessIsvisable = false;
    },
  },
};
</script>

<style scoped>
.content {
  background-color: #f2b82d;
  padding: 9rem 0;
}

.bigPhoto {
  background-image: url("../images/study.jpg");
  background-size: cover;
  object-fit: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
.parts {
  display: grid;
  grid-template-columns: repeat(4, 25%);
}
.part {
  text-align: center;
  padding: 50px 25px 30px;
  margin-left: 23px;
  margin-bottom: 20px;
}
.part:not(:first-of-type) {
  background-color: white;
}
img {
  width: 100%;
  height: 200px;
}
p {
  font-size: 1.1rem;
  color: #535353;
  font-family: sans-serif;
  text-align: left;
}
.mainP {
  margin-top: 1rem;
}
.moreRead {
  margin-top: 0.5rem;
}
button {
  margin-top: 1rem;
}
@media (max-width: 900px) {
  .parts {
    grid-template-columns: repeat(2, 50%);
    display: grid;
  }
}
@media (max-width: 600px) {
  .parts {
    grid-template-columns: repeat(1, 100%);
    display: grid;
  }
}
</style>
