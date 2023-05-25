import { useContext } from "react"
import { TodoListContext } from "@/context/TodoListContext"

interface ListItemT {
    todoId: number
    title: string
    checked: boolean
}

const ListItem = ({todoId, title, checked}: ListItemT) => {
    const {deleteTodo, checkTodo} = useContext(TodoListContext)
   
    const listItemStyles = {
        display: 'flex', 
        flexFlow: 'row',
        alignItems: 'center'
    }
    const buttonStyles = {
        padding: '10px', 
        background: 'grey', 
        color: 'white',
        border: '1px solid black',
        borderRadious: '20px',
        height: 'fit-content'
    }
    
    return (
        <li style={listItemStyles}>
            <button style={buttonStyles} onClick={() => checkTodo(todoId)}>{checked ? 'un check' : 'check'}</button>
            <p>{title}</p>
            <button 
                onClick={() => deleteTodo(todoId)}
                style={buttonStyles}
                >X
            </button>
        </li>
    )
}

export default ListItem