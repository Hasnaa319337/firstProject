<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
button{
    
    background-color: black;
    color: white;
    font-size: 1.1rem;
    padding: 7px;
    border: 0;
    outline: 0;
    cursor: pointer;
    text-transform: uppercase;
    font-family: cursive;
    margin-top: 1rem;
}
button:hover{
    background-color: #555;
}
</style>