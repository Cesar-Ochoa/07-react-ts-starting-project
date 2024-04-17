import { TodoAction, TodosState } from './types';  // Asegúrate de ajustar la ruta si es necesario
import { ADD_TODO, REMOVE_TODO } from './actions';
import Todo from '../models/todo';

const initialState: TodosState = {
  todos: []
};

function todosReducer(state: TodosState = initialState, action: TodoAction): TodosState {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = new Todo(action.payload);
      return {
        ...state,
        todos: state.todos.concat(newTodo)
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

export default todosReducer;
