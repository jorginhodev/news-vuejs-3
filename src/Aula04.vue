<script>
export default {
  data() {
    return {
      user: {
        name: "Jorge",
      },
    };
  },
};
</script>

<template>
  <h1>Aula 04 - Reatividade</h1>
  <h3>{{ user.name }} ({{ user.email }})</h3>

  <div>
    <button @click="user.name = 'Jorge Ramos'">Mudar nome</button>
    <button @click="user.email = 'jorginho@gmail.com'">Adicionar email</button>
  </div>
</template>
