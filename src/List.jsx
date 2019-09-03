import React, {useContext} from 'react'
import Item from './Item';
import { TodoContext } from './TodoStore';

const List = () => {

    const {todos, loading} = useContext(TodoContext);
    
    let todoList = <div>loading...</div>;

    if(!loading) todoList = todos.map( (todo) => <Item key={todo.id} todo={todo}/>);

    return (
        <>
            <div>
                {todoList}
            </div>
        </>
    )
}

export default List;