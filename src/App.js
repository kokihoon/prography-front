import React from 'react';
import TodoStore from './TodoStore';
import Header from './Header';
import Form from './Form';
import List from './List';
import './App.css';

const App = () => {
    return (
        <TodoStore>
            <Header className="header"/>
            <Form/>
            <List/>
        </TodoStore>
    )
}

export default App;