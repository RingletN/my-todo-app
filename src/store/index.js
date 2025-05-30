import { createStore } from 'vuex';

const store = createStore({
  state: {
    todos: [],
    nextTodoId: 1,
  },
  getters: {
    allTodos: (state) => state.todos,
    getTodoById: (state) => (id) => state.todos.find(todo => todo.id === parseInt(id)),
  },
  mutations: {
    ADD_TODO(state, todo) {
      todo.id = state.nextTodoId++;
      state.todos.push(todo);
    },
    TOGGLE_TODO(state, id) {
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
     EDIT_TODO(state, { id, title, description } ) {
        const todo = state.todos.find(todo => todo.id === id);
        if(todo){
            todo.title = title;
            todo.description = description;
        }

    }
  },
    actions: {
        addTodoAction({commit}, todo) {
            commit('ADD_TODO', todo)
        },
        toggleTodoAction({commit}, id) {
            commit('TOGGLE_TODO', id)
        },
        deleteTodoAction({commit}, id){
          commit('DELETE_TODO', id)
        },
        editTodoAction({commit}, payload) {
          commit('EDIT_TODO', payload)
        }
    }
});

export default store;