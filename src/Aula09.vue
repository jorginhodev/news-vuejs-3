<script>
import useHttpGet from "@/use/useHttpGet";

export default {
  setup() {
    const {
      data: { users },
      loading,
      error,
    } = useHttpGet("/api/users");

    return { users, loading, error };
  },
};
</script>

<template>
  <h1>Aula 09 - Composition API Parte 4</h1>
  <hr />

  <p v-if="loading">Carregando...</p>
  <p v-if="error != null">{{ error }}</p>

  <ul v-if="users">
    <li v-for="user in users" :key="user.id">
      {{ user.name }} - {{ user.mobile }}
    </li>
  </ul>
</template>
