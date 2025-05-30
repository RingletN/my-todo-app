    // src/router/index.js
    import { createRouter, createWebHistory } from 'vue-router';
    import TodoList from '../components/TodoList.vue';
    import AddTodo from '../components/AddTodo.vue';
    import EditTodo from '../components/EditTodo.vue';
    import TodoDetails from '../components/TodoDetails.vue';
    import Home from '../components/Home.vue';

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: { title: 'Главная страница' },
        },
        {
            path: '/todos',
            name: 'TodoList',
            component: TodoList,
            meta: { title: 'Список задач' },
        },
        {
            path: '/add',
            name: 'AddTodo',
            component: AddTodo,
            meta: { title: 'Добавить задачу' },
        },
        {
            path: '/edit/:id',
            name: 'EditTodo',
            component: EditTodo,
            meta: { title: 'Редактировать задачу' },
        },
        {
            path: '/todos/:id',
            name: 'TodoDetails',
            component: TodoDetails,
            meta: { title: 'Подробности задачи' },
        },
    ];
    const router = createRouter({
      history: createWebHistory(),
      routes,
    });
    router.beforeEach((to, from, next) => {
        document.title = to.meta.title || 'Мое приложение';
        next();
    });
    export default router;