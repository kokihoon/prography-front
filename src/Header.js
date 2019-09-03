import React, { useContext } from 'react';
import './Header.css';
import { TodoContext } from './TodoStore.js';

const Header = () => {

    const {todos} = useContext(TodoContext);
    
    return (
            <>
                <h1 className="header">TODO 애플리케이션</h1>
                <div className="countInfo">
                    TODO ! {todos.filter(v=>v.status ==="todo").length}개
                </div>
            </>        
    )
}

export default Header