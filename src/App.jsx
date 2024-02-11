import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(5)
	const inc = () => {
		setCount(count + 1)
		// setCount(prevState => {
		// 	return prevState + 1
		// })
	}

	return (
		<>
			<div className='card'>
				<h1></h1>
				<button onClick={inc}>count is {count}</button>
			</div>
		</>
	)
}

export default App
