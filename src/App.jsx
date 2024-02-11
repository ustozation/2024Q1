import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { todosList } from './utils/mock'
import './App.css'

function App() {
	const [todos, setTodos] = useState(todosList)
	const [newTodo, setNewTodo] = useState('')

	const addTodo = () => {
		if (newTodo) {
			setTodos([{ id: uuidv4(), title: newTodo, completed: false }, ...todos])
			setNewTodo('')
		}
	}

	return (
		<>
			<div className='wrapper'>
				<h1>Todo list</h1>
				<ul className='todos'>
					{todos.map(todo => (
						<li key={todo.id} className='todo-item'>
							{todo.title}
						</li>
					))}
				</ul>
				<div className='todo-footer'>
					<div className='todo-input'>
						<input
							type='text'
							onChange={e => setNewTodo(e.target.value)}
							value={newTodo}
						/>
						<button onClick={addTodo}>ADD</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
