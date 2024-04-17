import Todo from '../models/todo';

export interface TodosState {
  todos: Todo[];
}

export interface RootState {
  todos: TodosState;
}

export interface TodoAction {
  type: string;
  payload: any;
}
