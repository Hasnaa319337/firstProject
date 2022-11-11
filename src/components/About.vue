<template>
  <section class="about">
    <div class="container">
      <div class="layoutRow">
        <div class="row1">
          <img src="../images/pexelsphoto.jpeg" />
          <h3>
            A holistic, 360º approach to help you make the most of your brand.
          </h3>
          <p>WE WANT TO BE THAT COMPANY.</p>
        </div>
        <div class="row2">
          <div><img src="../images/Untitled12.png" /></div>

          <div><img src="../images/pexelsphoto2.jpeg" /></div>
        </div>

        <div class="row3">
          <img src="../images/pexelsphoto3.jpeg" />
          <p>
            A holistic, 360º approach to help you make the most of your brand.
          </p>
          <p>WE WANT TO BE THAT COMPANY.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  background: black;
  color: white;
  padding: 5rem 0;
}
.layoutRow {
  display: grid;
  grid-template-columns: repeat(3, auto);
}
.row1,
.row2,
.row3 {
  margin-bottom: 5rem;
}
.row1 img {
  width: 262px;
  height: 286px;
}
.row1 h3 {
  font-size: 1.7rem;
  margin: 3rem 0;
  width: 84%;
}
.row1 p {
  color: #facd3d !important;
  font-size: 1.1rem;
  width: 51%;
  letter-spacing: 3px;
  line-height: 26px;
}
.row2 {
  position: relative;
}
.row2 div:last-of-type {
  position: absolute;
  top: 49px;
  left: 73px;
}
.row2 div:first-of-type img {
  width: 515px;
  height: 511px;
}
.row2 div:first-of-type img {
  animation: rot infinite 3s;
}
.row2 img {
  width: 123%;
  height: 415px;
}
.row3 {
  text-align: center;
}
.row3 img {
  width: 262px;
  height: 286px;
}

.row3 p {
  font-size: 1.1rem;
  width: 70%;
  margin: 20px auto;
}
@media (max-width: 1000px) {
  .layoutRow {
    grid-template-columns: repeat(1, 100%);
    display: grid;
  }
  .row2 div:first-of-type img {
    height: 369px;
    width: 340px;
  }
  .row2 img {
    height: 254px;
    width: 198px;
  }
}
@media (max-width: 600px) {
  .layoutRow {
    grid-template-columns: repeat(1, 100%);
    display: grid;
  }
  .row2 div:first-of-type img {
    height: 369px;
    width: 340px;
  }
  .row2 img {
    height: 254px;
    width: 198px;
  }
}

/* transition*/

@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
