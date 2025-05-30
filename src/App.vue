<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/todos">Список задач</router-link> |
     <router-link to="/add">Добавить задачу</router-link>
  </nav>
    <div class="container">
      <router-view />
    </div>
</template>

  <style scoped>
  nav {
    padding: 20px;
  }
  a {
    text-decoration: none;
  }
  </style>