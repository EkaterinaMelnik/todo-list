import React from 'react';
import {connect} from 'react-redux';
import TodoList from "../components/TodoList";
import {toggle_todo} from '../actions';

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggle_todo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)