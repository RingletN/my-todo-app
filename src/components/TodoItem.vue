<template>
  <li :class="{ completed: todo.completed }">
      <span @click="$emit('toggle-todo')">{{ todo.title }}</span>
      <div class="actions">
          <router-link class="action-link" :to="{ 
            name: 'TodoDetails', params: {id: todo.id}
          }">Подробнее</router-link>
          <router-link class="action-link" :to="{ 
            name: 'EditTodo', params: {id: todo.id}
          }">Редактировать</router-link>
          <button @click="$emit('delete-todo')">Удалить</button>
      </div>
  </li>
</template>

<script>
export default {
props: {
  todo: {
    type: Object,
    required: true,
  },
},
};
</script>

<style scoped>
.actions {
  display: flex;
  align-items: center; /* Выравнивание по центру */
}
</style>