export const todoReducer = (todos, {type, payload}) => {
    switch(type) {
      case "ADD_TODO":
        return [...todos, {'title':payload, 'id':todos.length+1, 'status':'todo'}];
  
      case "SET_INIT_DATA":
        return payload;
      
      case "CHANGE_TODO_STATUS":
        return  todos.map(todo => {
          if(todo.id === +payload) {
            if(todo.status === "complete") todo.status = "todo";
            else todo.status = "complete";
          }
    
          return todo;
        });
        
      case "REMOVE_TODO":
          return todos.filter(todo => todo.id !== +payload);
          
      default:
        break;
  
    }
  }