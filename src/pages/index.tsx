import List from '../components/List'
import TodoListContextProvider from '../context/TodoListContext'


export default function Home() {
  return (
    <>
      <main>
       <h1>Create your own todo list</h1>
       <TodoListContextProvider>
         <List />
       </TodoListContextProvider>
      </main>
    </>
  )
}
