import { Component } from "react";
function TodoList(props){
    return(
        <div className="todoList">
            <li>
                {props.value}
            </li>
            <button className = "btnDelete" onClick={()=>{props.sendDeletedItem(props.id)}}>
                <ion-icon name="trash-outline"></ion-icon>
            </button>
        </div>       
    );
    
}
export default TodoList;