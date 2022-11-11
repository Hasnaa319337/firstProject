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
    background-color: transparent;
    border: none;
    color: black;
    border-bottom:2px solid #f2b82d ;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: .1s all ease-in-out;
}
button:hover{
    color: #f2b82d;
    border-bottom:2px solid black ;
    transition: .1s all ease-in-out;
}
</style>