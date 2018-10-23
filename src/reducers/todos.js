import {ADD_TODO, TOGGLE_TODO} from '../actions';

const initialState = [
    {
        id: 0,
        text: 'React',
        completed: false
    },
    {
        id: 1,
        text: 'Vue.js',
        completed: false
    },
    {
        id: 2,
        text: 'Angular',
        completed: false
    }
];

const todos = (state = initialState, action) => {
        switch (action.type) {
            case ADD_TODO:
                return [
                    ...state,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ];
            case TOGGLE_TODO:
                return state.map((todo, index) =>
                    action.id === index ?
                        {
                            ...todo,
                            completed: !todo.completed
                        }
                        : todo
                );
            default:
                return state
        }
    }
;

export default todos