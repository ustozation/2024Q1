import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { todosList } from './utils/mock'
import './App.css'

function App() {
	const [todos, setTodos] = useState(todosList)
	const [newTodo, setNewTodo] = useState('')
	const ulRef = useRef()

	const handleScroll = () => {
		console.log('scroll')
	}

	const addTodo = () => {
		if (newTodo) {
			setTodos(prevTodos => {
				const newTodoData = {
					id: uuidv4(),
					title: newTodo,
					completed: false,
				}

				return [newTodoData, ...prevTodos]
			})
			setNewTodo('')
		}
	}

	const removeScroll = () => {
		ulRef.current.removeEventListener('scroll', handleScroll)
	}

	useEffect(() => {
		ulRef.current.addEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<div className='wrapper'>
				<h1>Todo list</h1>
				<ul className='todos' ref={ulRef}>
					{todos.map(todo => (
						<li key={todo.id} className='todo-item'>
							{todo.title}
						</li>
					))}
				</ul>
				<div className='todo-footer'>
					<button onClick={removeScroll}>Remove scroll</button>
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
