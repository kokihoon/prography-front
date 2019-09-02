import React, {useState, useEffect } from 'react';
import './App.css';
import List from './List';
import useFetch from './useFetch';
import Header from './Header';
import Form from './Form';

export const TodoContext = React.createContext();

const TodoStore = () => {
  const [todos, setTodos] = useState([]);

  const loading = useFetch(setTodos, 'https://killsanghyuck.github.io/prography_5th_front/todoDummy.json');

  const addTodo = (newTodo) => {
    setTodos([...todos, {'title':newTodo, 'id':todos.length+1, 'status':'todo'}])
    console.log(todos)
  }

  const changeTodoStatus = (id) => {
    const updateTodos = todos.map(todo => {
      if(todo.id === +id) {
        if(todo.status === "complete") todo.status = "todo";
        else todo.status = "complete";
      }

      return todo;

    });

    setTodos(updateTodos);
  }

  useEffect( () => {
    console.log("새로운 내용이 렌더링 됐네요.")
  }, [todos])

  return (
    <TodoContext.Provider value={{todos, addTodo, loading, changeTodoStatus}}>
      <Header/>
      <Form/>
      <List/>
    </TodoContext.Provider>
  )
}

export default TodoStore;
