<template>
  <h1>{{ customTitle }}</h1>
  <p>{{ counter }} <sup>2</sup>={{ squareCounter }}</p>
  <div>
    <button @click="increase">+1</button
    ><button v-on:click="decrease">-1</button>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      default: 4,
      // required: true
      validator(value) {
        return value > 1
      },
    },
  },
  data() {
    return {
      counter: this.start,
    }
  },
  methods: {
    getSquareValue() {
      // metodo que se ejecuta siempre
      console.log('GetSquareValue')
      return this.counter * this.counter
    },
    increase() {
      return this.counter++
    },
    decrease() {
      return this.counter--
    },
  },
  // propiedades computadas - se guardan en el cache
  computed: {
    // metodo que se ejecuta cuando sufre cambios
    squareCounter() {
      console.log('Propiedad computada')
      return this.counter * this.counter
    },
    customTitle() {
      // return this.title !== undefined ? this.title : 'Counter'
      // return this.title ? this.title : 'Counter App'
      return this.title || 'Counter App 3'
    },
  },
}
</script>
<style>
button {
  background-color: rgb(12, 187, 12);
  margin: 0px 5px;
  border-style: none;
  padding: 8px 25px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
}
button:hover {
  background-color: green;
  transition: 0.3s ease-in-out;
}
</style>
