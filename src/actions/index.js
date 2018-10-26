let nextTodoId = 2;

export const ADD_TODO = 'ADD_TODO';

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const add_todo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

export const toggle_todo = id => ({
    type: TOGGLE_TODO,
    id
});

export const set_visibility_filter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});
