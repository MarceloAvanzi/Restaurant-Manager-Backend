import { useState } from 'react'
import './styles.css'


export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()


    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })

    setNewItem("")
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
      <form onSubmit={handleSubmit} className="new-item-form" >  
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {/* short circuit in React */}
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type='checkbox' checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>Delete</button>
            </li>
          )
        })}
        
      </ul>
    </>
  )
}