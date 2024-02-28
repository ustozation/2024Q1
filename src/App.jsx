import { useEffect } from 'react'
// import { useFetch } from './hooks/fetch.hook'
// import { API_PATH } from './constants/api-paths'
import { APIClient } from './services/APIClient'
import './App.css'

function App() {
	const apiClient = new APIClient()
	// const { data, loading, error } = useFetch(API_PATH.GET_TODOS)

	useEffect(() => {
		apiClient
			.postData('/posts', { title: 'Frontend 2.0' })
			.then(data => {
				console.log('then', data)
			})
			.catch(err => {
				console.log('catch', err)
			})
	}, [])

	return (
		<>
			<div className='wrapper'>
				<div className='counter-wrapper'>
					{/* {loading && <h2>Loading...</h2>}
					{error && <h2>Error</h2>} */}
					{/* {data && <h2>{data.title}</h2>} */}
				</div>
			</div>
		</>
	)
}

export default App
