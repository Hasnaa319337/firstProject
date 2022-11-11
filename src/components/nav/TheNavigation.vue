<template>
  <transition>
    <div class="overlay" @close="hideSideNav" v-if="sideNavIsVisable">
      <div class="sidebar">
        <div class="close" @click="hideSideNav"></div>
        <div class="list">
          <ul>
            <li><router-link to="">Home</router-link></li>
            <li><router-link to="/team" replace>Team</router-link></li>
            <li><router-link to="/work">Work</router-link></li>
            <li><router-link to="/more">More</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/clients">Clients</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li><router-link to="/amazing">Amazing</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </transition>

  <div class="container">
    <nav>
      <a class="logo"><img src="../../images/default-logo.png" /></a>
      <ul class="bigList">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/team" replace>Team</router-link></li>
            <li><router-link to="/work">Work</router-link></li>
            <li><router-link to="/more">More</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/clients">Clients</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li><router-link to="/amazing">Amazing</router-link></li>
          </ul>
      <a class="bars" @click="showSideNav"
        ><img src="../../images/menu_FILL0_wght400_GRAD0_opsz48.png"
      /></a>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sideNavIsVisable: false,
    };
  },
  methods: {
    showSideNav() {
      this.sideNavIsVisable = true;
    },
    hideSideNav() {
      this.sideNavIsVisable = false;
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.3rem 0;
}
.logo {
  cursor: pointer;
}
.bars {
  cursor: pointer;
  display: none;
}
ul {
  list-style: none;
}
li {
  font-size: 1.3rem;
  padding: 15px 0;
  font-size: 1.3rem;
    padding: 15px 0;
    float: left;
    margin-right: 29px;
}
li:last-of-type{
  margin-right: 0;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  cursor: pointer;
  color: #a1a1a1;
}
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #000000bf;
  z-index: 100;
  display: none;
}
.sidebar {
  width: 30%;
  height: 100%;
  background-color: black;
  color: white;
  padding: 0.8rem 1.7rem;
}
.close {
  z-index: 1;
  position: relative;
  width: 22px;
  height: 28px;
  margin: 20px 20px 0 auto;
  text-align: right;
  font-style: initial;
  letter-spacing: initial;
  font-weight: initial;
  display: block;
  cursor: pointer;
}
.close::before {
  content: "\2715";
  font-size: 28px !important;
}

/*
@keyframes sidebar {
  from {
    transform: translatex(-50px);
  }
  to {
    transform: translatex(0);
  }
}
*/
.v-enter-from {
  transform: translatex(-50px);
}
.v-enter-active {
  transition: 0.3s ease-out;
}
.v-enter-to {
  transform: translatex(0);
}
.v-leave-from {
  transform: translatex(0);
}

.v-leave-active {
  transition: 0.3s ease-in;
}
.v-leave-to {
  transform: translatex(-50px);
}

@media (max-width: 1100px) {
  .overlay{
    display: block;
  }
  .bars {
    display: block;
  }
.list {
  text-align: center;
  margin: auto;
  margin-top: 1.5rem;
}
ul {
  list-style: none;
}
li {
  font-size: 1.3rem;
  padding: 15px 0;
  display: block;
  width: 100%;
}
a {
  text-decoration: none;
  color: white;
}
a:hover {
  cursor: pointer;
  color: #a1a1a1;
}
.bigList{
  display: none;
}
}


</style>
