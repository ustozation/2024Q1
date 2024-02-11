import { useState, useEffect } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(1)
	const [loading, setLoading] = useState(true)
	const [todo, setTodo] = useState(null)

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
			.then(response => response.json())
			.then(json => {
				setTodo(json)
				setLoading(false)
			})

		return () => {
			setLoading(true)
		}
	}, [count])

	console.log(todo)

	return (
		<>
			<div className='wrapper'>
				<h1>{loading ? 'Loading...' : todo.title}</h1>
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
			</div>
		</>
	)
}

export default App
