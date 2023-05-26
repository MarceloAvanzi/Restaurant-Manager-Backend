import { useEffect, useState } from 'react'
import '../static/styles.css'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'
import mealsService from '../services/meals.service'
import usersService from '../services/users.service'


export default function App() {
  // hooks need to be in the beginning of the function always

  // the default value for "todos" is searched on localStorage, if it's empty it returns an empty array
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    // calling this backend api to bring all the meals
    mealsService.getAllMeals().then(res => {
      console.log('Meals: ',res.data)
    })
    
    // calling this backend api to bring all the users
    usersService.getAllUsers().then(res => {
      console.log('Users: ', res.data)
    })

    // every time our "todos" change it will run this function
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    if (title !== "") {
        setTodos(currentTodos => {
            return [
                ...currentTodos, 
                {id: crypto.randomUUID(), title, completed: false},
            ]   
        })
    }
  }

  function toggleTodo (id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed } 
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    // this is called fragment, it's just an empty tag, because in React a component (App in this case) can only return one element, so this is a way to return more than one (form and h1 in this case)
    <>
      <NewTodoForm addTodo={addTodo}/>
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}