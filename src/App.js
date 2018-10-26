import React, {Component} from 'react';
import './App.css';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Todo list</h1>
                <VisibleTodoList/>
                <Footer/>
            </div>
        );
    }
}

export default App;
