import { useContext, useState } from "react";
import { TodoListContext } from "@/context/TodoListContext";
import ListForm from "./ListForm";
import ListItem from "./ListItem";

interface todoT {
    id: number
    title: string
    checked: boolean
}

const List = () => {
    const {todos, deleteTodo, checkTodo} = useContext(TodoListContext)

    return (
        <section>
            <div>
                <ListForm />
            </div>
            {todos.length > 0 && (
                <div>
                {todos.map((todo) => (
                    <ListItem 
                        key={todo.id}
                        todoId={todo.id}
                        title={todo.title}
                        checked={todo.checked}
                        handleDelete={deleteTodo}
                        handleCheckedElement={checkTodo}
                    />
                ))}
            </div>
            )}
        </section>
    )
}

export default List;