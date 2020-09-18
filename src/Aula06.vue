<script>
import HelloWorld from "./components/HelloWorld";

export default {
  components: { HelloWorld },
  created() {
    fetch("/api/users");
  },
};
</script>

<template>
  <h1>Aula 06 - Composition API Parte 1</h1>
  <hr />

  <HelloWorld />
</template>
