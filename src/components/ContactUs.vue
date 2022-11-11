<template>
  <section class="contact">
    <div class="container">
      <div class="flex">
        <div class="concForm">
          <h2>contact us</h2>
          <form>
            <div class="form-control">
              <input
                name="usename"
                type="text"
                v-model="username"
                placeholder="Enter Your Name"
              />
            </div>
            <div class="form-control">
              <input
                name="email"
                type="email"
                v-model="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div class="form-control phoneform">
              <input
                name="phone"
                :type="fieldType"
                v-model="phone"
                placeholder="Enter Your Phone"
              />
              <img class="passicon" src="../images/passIcon.png" @click="convertType"/>
            </div>
            <div class="form-control">
              <textarea
                v-model="area"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <base-button>Submit</base-button>
          </form>
        </div>
        <div class="image"><img src="../images/-min.jpg"/></div>
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
      username: "",
      email: "",
      phone: null,
      area: "",
      fieldType:'password',
    };
  },
  methods:{
    convertType(){
      this.fieldType = this.fieldType === 'password' ? "text" : "password";
    }
  },
};
</script>

<style scoped>
.contact {
  background-color: #f4c53b;
  padding-top: 4rem;
  padding-bottom: 109px;
}
.flex {
  display: grid;
  grid-template-columns: repeat(2, 60%);
}

/*
.image {
  background-image: url("../images/-min.jpg");
  background-position: 50% 50%;
  background-size: cover;
  height: 630px;
  width: 70%;
}*/
.image img{
  width: 70%;
    height: 100%;
}
h2 {
  letter-spacing: normal;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 800;
  text-transform: none;
  font-size: 3.75rem;
  margin-bottom: 13px;
  text-align: center;
  width: 60%;
}
.form-control {
  margin-bottom: 19px;
  width: 60%;

}

input,
textarea {
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 3px;
  height: 45px;
}
textarea {
  height: 140px;
}
.phoneform {
  position: relative;
  display: inline-block;
}
.passicon {
  width: 25px;
  height: 20px;
  position: absolute;
  right: 7px;
  top: 12px;
  cursor: pointer;
}
button {
  margin-bottom: 19px;
  padding-left: 19px;
  width: 60%;
  height: 52px;
  margin-top: 0;
  padding: 10px 12px;
  border: none;
}
@media (max-width: 900px) {
 
  .flex {
    grid-template-columns: repeat(1, 100%);
    display: grid;
  }
  .concForm{
    width: 70%;
    margin: auto;
  }
  .form-control,button{
    width: 100%;
  }
  h2{
    text-align: center;
    font-weight: 600;
    width: 100%;
    font-size: 3rem;
    
  }
  
}
@media (max-width: 1230px) {
  h2{
   
    font-weight: 600;
   
    font-size: 3rem;
    
  }
}
</style>
