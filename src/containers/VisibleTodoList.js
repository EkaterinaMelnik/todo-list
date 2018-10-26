import {connect} from 'react-redux';
import TodoList from "../components/TodoList";
import {toggleTodo, VisibilityFilters} from '../actions';

const getVisibleTodos = (state, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return state;
        case VisibilityFilters.SHOW_COMPLETED:
            return state.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return state.filter(todo => !todo.completed);
        default:
            return new Error("Unknown filter" + filter)
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)