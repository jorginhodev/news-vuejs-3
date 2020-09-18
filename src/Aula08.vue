<script>
import HelloWorld from "./components/HelloWorld";
import { ref } from "vue";
import axios from "axios";

export default {
  components: { HelloWorld },
  setup() {
    const users = ref([]);

    axios.get("/api/users").then((res) => (users.value = res.data.users));

    return { users };
  },
};
</script>

<template>
  <h1>Aula 08 - Composition API Parte 3</h1>
  <hr />

  <HelloWorld />

  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }} - {{ user.mobile }}
    </li>
  </ul>
</template>
