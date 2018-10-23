let nextTodoId = 2;

export const ADD_TODO = 'ADD_TODO';

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const add_todo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

export const toggle_todo = id => ({
    type: TOGGLE_TODO,
    id
});