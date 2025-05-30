<template>
  <div class="todo-details">
      <h2>Детали задачи</h2>
      <div v-if="todo">
          <h3>{{ todo.title }}</h3>
          <p>{{ todo.description }}</p>
          <router-link to="/todos">Назад</router-link>
      </div>
      <div v-else>
          <p>Задача не найдена</p>
      </div>
  </div>
  </template>

<script>
  import { mapGetters } from 'vuex';

  export default {
      computed: {
          ...mapGetters(['getTodoById']),
              todo() {
              return this.getTodoById(this.$route.params.id);
          },
      },
  };
</script>