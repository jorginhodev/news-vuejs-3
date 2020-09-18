<script>
import HelloWorld from "./components/HelloWorld";

export default {
  components: { HelloWorld },
  setup() {
    const clickHandler = () => console.log("fui clicado");
    return {
      user: "Jorge",
      email: "jorginhodeveloper@gmail.com",
      clickHandler,
    };
  },
};
</script>

<template>
  <h1>Aula 07 - Composition API Parte 2</h1>
  <hr />

  <h2>{{ user }} - {{ email }}</h2>

  <button @click="clickHandler">Click me!</button>

  <HelloWorld />
</template>
