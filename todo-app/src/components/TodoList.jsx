import React from 'react'

function TodoList(props) {

    return (
        <ul className="list-group">
            {
                props.todos.length > 0 ?  props.todos.map((todo,index) => (
                    <li className="list-group-item" key={index}> {index + 1} {todo}
                        <i className="fa fa-times" style={{ float: 'right' }} onClick={() => props.deleteTodo(index)}></i>
                    </li>
                )): (<li className="list-group-item">No Todo Found</li>)
            }
        </ul>
    )
}

export default TodoList