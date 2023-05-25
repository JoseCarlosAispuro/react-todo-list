import { createContext, useState, ReactNode } from "react";

interface propsT {
    children: ReactNode
}

interface TodoT {
    id: number
    title: string
    checked: boolean
}

export interface TodoListContextT {
    todos: TodoT[],
    createTodo: (inputValue: string) => void,
    checkTodo: (id: number) => void,
    deleteTodo: (id: number) => void
}

export const TodoListContextDefault: TodoListContextT = {
    todos: [],
    createTodo: () => {},
    checkTodo: () => {},
    deleteTodo: () => {}
}

export const TodoListContext = createContext<TodoListContextT>(TodoListContextDefault)

const TodoListContextProvider = (props: propsT) => {
    const {children} = props
    const [todos, setTodos] = useState<TodoT[]>([])
    const [todosId, setTodosId] = useState<number>(0)
    
    const createTodo = (inputValue: string) => {
        setTodos([...todos, {id: todosId + 1, title: inputValue, checked: false}])
        setTodosId(todosId + 1)
    }

    const deleteTodo = (id: number) => {
        const filteredTodos = todos.filter(todo => todo.id !== id)
        setTodos(filteredTodos)
    }

    const checkTodo = (id: number) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.checked = !todo.checked
            }
            
            return todo
        })
        setTodos(newTodos);
    }
    
    return (
        <TodoListContext.Provider value={{
            todos,
            createTodo,
            checkTodo,
            deleteTodo
        }}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider