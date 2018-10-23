let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO';

export function add_todo(text) {
  return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
  }
}