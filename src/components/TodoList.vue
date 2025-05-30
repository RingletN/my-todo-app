<template>
  <h2>Список задач</h2>
  <div v-if="todos.length === 0">
    <p>Нет задач</p>
  </div>
  <ul v-else>
    <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-todo="toggleTodo(todo.id)"
        @delete-todo="deleteTodo(todo.id)"
    />
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoItem from "./TodoItem.vue";

export default {
    components: {TodoItem},
    computed: {
        ...mapGetters(['allTodos']),
        todos() {
            return this.allTodos
        }
    },
    methods: {
        ...mapActions(['toggleTodoAction','deleteTodoAction']),
        toggleTodo(id) {
          this.toggleTodoAction(id)
        },
        deleteTodo(id) {
          this.deleteTodoAction(id);
        }
    }
};
</script>