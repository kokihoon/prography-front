import React, {useState, useEffect } from 'react';
import './App.css';
import List from './List';
import useFetch from './useFetch';
import Header from './Header';
import Form from './Form';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const loading = useFetch(setTodos, 'https://killsanghyuck.github.io/prography_5th_front/todoDummy.json');


  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {'title':newTodo, 'id':todos.length+1, 'status':'todo'}])
    console.log(todos)
  }

  const changeTodoStatus = (id) => {
    const updateTodos = todos.map(todo => {
      if(todo.id === +id) {
        if(todo.status == "complete") todo.status = "todo";
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
    <div>
      <Header todos={todos}/>
      <Form addTodo={addTodo} changeInputData={changeInputData}/>
      <List todos={todos} loading={loading} changeTodoStatus={changeTodoStatus}/>
    </div>
  )
}

export default App;
