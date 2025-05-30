<template>
  <h2>Добавить задачу</h2>
  <form @submit.prevent="addTodo">
    <div>
      <label>Название:</label>
      <input type="text" v-model="newTodo.title" required />
    </div>
    <div>
      <label>Описание:</label>
      <textarea v-model="newTodo.description"></textarea>
    </div>
    <button type="submit">Добавить</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      newTodo: {
        title: '',
        description: '',
        completed: false,
      },
    };
  },
  methods: {
      ...mapActions(['addTodoAction']),
    addTodo() {
      this.addTodoAction({...this.newTodo})
      this.$router.push('/todos');
    },
  },
};
</script>