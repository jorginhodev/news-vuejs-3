<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const users = ref([]);
    const loading = ref(true);
    const error = ref(null);

    axios
      .get("/api/users")
      .then((res) => (users.value = res.data.users))
      .catch((err) => (error.value = err.response.data))
      .finally(() => (loading.value = false));

    return { users, loading, error };
  },
};
</script>

<template>
  <h1>Aula 10 - Composition API Parte 5</h1>
  <hr />

  <p v-if="loading">Carregando...</p>
  <p v-if="error != null">{{ error }}</p>

  <ul v-else>
    <li v-for="user in users" :key="user.id">
      {{ user.name }} - {{ user.mobile }}
    </li>
  </ul>
</template>
