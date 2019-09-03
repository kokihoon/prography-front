import React, { useEffect, useReducer } from 'react';
import './App.css';
import useFetch from './useFetch';
import {todoReducer} from './reducers';

export const TodoContext = React.createContext();

const TodoStore = (props) => {

  const [todos, dispatch] = useReducer(todoReducer, []);

  const setInitData = (initData) => {
    dispatch({type:"SET_INIT_DATA", payload:initData});
  }
  
  const loading = useFetch(setInitData, 'https://killsanghyuck.github.io/prography_5th_front/todoDummy.json');

  useEffect( () => {
    console.log("새로운 내용이 렌더링 됐네요.")
  }, [todos])

  return (
    <TodoContext.Provider value={{todos, loading, dispatch}}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoStore;
