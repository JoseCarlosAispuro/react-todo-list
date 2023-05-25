import { TodoListContext } from "@/context/TodoListContext"
import { useContext, useState } from "react"
interface props {
    handleFormSubmit: (inputValue: string) => void
}

const ListForm = () => {
    const {createTodo} = useContext(TodoListContext)
    const [inputValue, setInputValue] = useState<string>('')
    
    const handleSubmit = (e: any) => {
        e.preventDefault()
        
        if(inputValue !== '') {
            createTodo(inputValue)
            setInputValue('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default ListForm