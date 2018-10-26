import React, {Component} from 'react';
import './App.css';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import AddTodo from "./containers/AddTodo";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Todo list</h1>
                <AddTodo/>
                <VisibleTodoList/>
                <Footer/>
            </div>
        );
    }
}

export default App;
