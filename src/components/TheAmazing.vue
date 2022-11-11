<template>
  <section>
    <p v-bind="shorten">{{para }}</p>
    <label>Enter Hours</label>
    <input v-model="hour" />
    <label >Enter Minutes</label>
    <input v-model="minute"/>
    <label>Enter Seconds</label>
    <input v-model="second" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      hour: 0,
      minute: 0,
      second: 0,
      para: " Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit Curabitur id suscipit ex Suspendisse rhoncus laoreet purus  ",
    };
  },
  methods: {
    shorten(v) {
      return v.substring(0, 15) + "...";
    },
    
  },
  computed: {},
  watch: {
    hour: function (val) {
      this.minute = val * 60;
      this.second = val * 60 * 60;
    },
    minute: function (val) {
      this.hour = val / 60;
      this.second = val * 60;
    },
    second: function (val) {
      this.hour = val / 3600;
      this.minute = val / 60;
    },
  },
};
</script>

<style scoped>
section {
  margin: 20px 0;
  background-color: aquamarine;
  text-align: center;
}
ul {
  margin: 5px 0;
  padding: 0;
  list-style: none;
  text-align: center;
  margin: auto;
  width: 500px;
}
li {
  border: 1px solid #ccc;
  padding: 5px;
  display: block;
  font-size: 20px;
  cursor: pointer;
  width: 100px;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.list-enter-active {
  transition: 0.3s all ease-out;
}
.list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.list-leave-active {
  transition: 0.3s all ease-in;
}
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
  position: absolute;
}

.list-move {
  transition: transform 0.5s ease;
}
</style>
