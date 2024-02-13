import { useState } from 'react'
import Count from './components/Count'
import IsFive from './components/IsFive'
import './App.css'

function App() {
	const [count1, setCount1] = useState(0)
	const [count2, setCount2] = useState(0)
	return (
		<>
			<div className='wrapper'>
				<div className='counter-wrapper'>
					<h2>Counter № 1</h2>
					<div className='counter'>
						<button onClick={() => setCount1(count1 + 1)}>+</button>
						<Count id={1} value={count1} />
					</div>
				</div>
				<div className='counter-wrapper'>
					<h2>Counter № 2</h2>
					<div className='counter'>
						<button onClick={() => setCount2(count2 + 1)}>+</button>
						<Count id={2} value={count2} />
						<IsFive value={count2} />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
