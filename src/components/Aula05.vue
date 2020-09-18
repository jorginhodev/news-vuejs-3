<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "Vue" },
        { id: 2, name: "Vuex" },
        { id: 3, name: "Vue-router" },
      ],
    };
  },
};
</script>

<template>
  <h1>Hello Vue 3</h1>

  <teleport to="#title">Meu title personalizado!</teleport>
  <teleport to="#modal">
    <h1>La la la</h1>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </teleport>
</template>
