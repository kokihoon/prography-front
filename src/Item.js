import React, {useContext} from 'react';
import './Item.css';
import {TodoContext} from './TodoStore';

const Item = ({todo}) => {

    const {dispatch} = useContext(TodoContext);
    const toggleItem = (e) => {
        const id = e.target.dataset.id;
        dispatch({type:"CHANGE_TODO_STATUS", payload:id});
    }
    const removeItem = (e) => {
        const id = e.target.dataset.id;
        console.log(id)
        dispatch({type:"REMOVE_TODO", payload:id});
    }
    const itemClassName = todo.status === 'complete' ? 'complete' : '';
    
    return (
        <>
        <li 
            data-id={todo.id}
            onClick={toggleItem}
            className={itemClassName}
        >
            {todo.title} 
        </li>
        <span
            data-id={todo.id}
            onClick={removeItem}
        >
            X
        </span>
        </>
    )
}

export default Item;