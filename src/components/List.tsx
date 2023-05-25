import { useEffect, useState } from "react";
import ListForm from "./ListForm";
import ListItem from "./ListItem";

interface todoT {
    id: number
    title: string
    checked: boolean
}

const List = () => {
    const [todos, setTodos] = useState<todoT[]>([])
    const [todosId, setTodosId] = useState<number>(0)
    
    const handleFormSubmit = (inputValue: string) => {
        setTodos([...todos, {id: todosId + 1, title: inputValue, checked: false}])
        setTodosId(todosId + 1)
    }

    const handleDelete = (id: number) => {
        const filteredTodos = todos.filter(todo => todo.id !== id)
        setTodos(filteredTodos)
    }

    const handleCheckedElement = (id: number) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.checked = !todo.checked
            }
            
            return todo
        })
        setTodos(newTodos);
    }
    
    return (
        <section>
            <div>
                <ListForm handleFormSubmit={handleFormSubmit}/>
            </div>
            {todos.length > 0 && (
                <div>
                {todos.map((todo) => (
                    <ListItem 
                        key={todo.id}
                        todoId={todo.id}
                        title={todo.title}
                        checked={todo.checked}
                        handleDelete={handleDelete}
                        handleCheckedElement={handleCheckedElement}
                    />
                ))}
            </div>
            )}
        </section>
    )
}

export default List;