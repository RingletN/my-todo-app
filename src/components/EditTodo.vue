<template>
  <h2>Редактировать задачу</h2>
  <form @submit.prevent="editTodo">
      <div>
          <label>Название:</label>
          <input type="text" v-model="editableTodo.title" required />
      </div>
      <div>
          <label>Описание:</label>
          <textarea v-model="editableTodo.description"></textarea>
      </div>
      <button type="submit">Сохранить</button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
          return {
            editableTodo: {
              id: null,
              title: '',
              description: '',
            },
          };
        },
computed: {
  ...mapGetters(['getTodoById']),
    todo(){
        return this.getTodoById(this.$route.params.id);
    }

},
  watch: {
    todo: {
        handler(newTodo){
          if (newTodo) {
            this.editableTodo = {...newTodo};
           }
        },
        immediate: true
    }
  },
methods: {
    ...mapActions(['editTodoAction']),
  editTodo() {
     this.editTodoAction({id: parseInt(this.$route.params.id), ...this.editableTodo})
     this.$router.push('/todos')
  },
},
};
</script>