import React, {Component} from 'react';
import './App.css';
import VisibleTodoList from './containers/VisibleTodoList';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Todo list</h1>
                <VisibleTodoList/>
            </div>
        );
    }
}

export default App;
