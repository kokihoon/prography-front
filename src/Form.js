import React from 'react';

const Form = ({addTodo, changeInputData}) => {
    return (
        <>
            <form action="">
                <input type="text" name="" onChange={changeInputData} />
                <button onClick={addTodo}>할일 추가</button>
            </form>
        </>
    )
}