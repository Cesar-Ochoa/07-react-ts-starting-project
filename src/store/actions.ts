import Todo from '../models/todo';

export interface TodoAction {
  type: string;
  payload: any;
}

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (text: string) => {
  return {
    type: ADD_TODO,
    payload: text
  };
};

export const removeTodo = (id: string) => {
  return {
    type: REMOVE_TODO,
    payload: id
  };
};
