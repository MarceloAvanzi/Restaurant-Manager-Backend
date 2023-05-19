import { useState } from 'react'
import './styles.css'


export default function App() {
  useState("") // parei aqui
  return (
    // this is called fragment, it's just an empty tag, because in React a component (App in this case) can only return one element, so this is a way to return more than one (form and h1 in this case)
    <>
      <form className="new-item-form" >  
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item"/>
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        <li>
          <label>
            <input type='checkbox'/>
            Item 1
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
      <ul className='list'>
        <li>
          <label>
            <input type='checkbox'/>
            Item 2
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
    </>
  )
}