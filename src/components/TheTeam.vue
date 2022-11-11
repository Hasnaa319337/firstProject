<template>
  <div class="container">
    <div class="team">
      <div class="girl"></div>
      <div class="flex">
        <div class="yellowback"></div>
        <div class="aboutTeam">
          <h3>
            Our professional team will be<br />
            happy to bring amazing ideas <br />
            and projects to life
          </h3>
          <p>
            Ut tellus elementum sagittis vitae et leo duis. Nisi est sit amet
            facilisis magna etiam. Odio facilisis mauris sit amet massa vitae
            tortor. Eros donec ac odio tempor orci dapibus ultrices in.
          </p>
          <base-button>Learn More</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./buttons/BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>

<style scoped>
.team {
  text-align: center;
  margin-top: 5rem;
  display: flex;
  
}
.girl {
  background-image: url("../images/girl.jpeg");
  background-size: cover;
  min-height: 600px;
  background-position: 50% 50%;
  width: 80%;
  margin-right: 5rem;
  transform: .3s all ease-in-out;
}
.flex {
  position: relative;
}
.yellowback {
  background-color: #f2b82d;
  width: 600px;
  height: 98px;

  position: absolute;
  left: -39%;
  top: 13%;
}
.aboutTeam {
  padding: 25px 30px;
  color: #111111;
  background-color: #f2f2f2;
  position: relative;
  top: 40%;
}
h3 {
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
}
p {
  line-height: 1.8;
  margin: 28px 0 0;
  font-size: 1rem;
}

@media (max-width: 1100px) {
  .girl {
    width: 100%;
  }
  .aboutTeam {
    top: 20%;
    width: 400px;
  }
  .yellowback {
    left: -70%;
  }
  h3 {
    font-size: 1.5rem;
  }
}
@media (max-width: 900px) {
  .team {
    display: block;
    position: relative;
    
  }
  .girl {
    width: 100%;
  }
  .aboutTeam {
    width: 100%;
  }
  .yellowback {
    left: 15%;
    top: -173%;
    width: 70%;
    height: 61px;
  }
  h3 {
    font-size: 1.5rem;
  }
}
</style>
