import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(5)
	const inc = () => {
		setCount(count + 1)
	}

	const dec = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	return (
		<>
			<div className='card'>
				<h1>{count}</h1>
				<button onClick={inc}>INC</button>
				{count > 0 && <button onClick={dec}>DEC</button>}
			</div>
		</>
	)
}

export default App
