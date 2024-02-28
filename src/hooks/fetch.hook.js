import { useEffect, useState } from 'react'
import { apiClient } from '../services/APIClient'

export function useFetch(endpoint) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	
	useEffect(() => {
		apiClient
			.getData(endpoint)
			.then(data => {
				setData(data)
				setLoading(false)
			})
			.catch(() => {
				setLoading(false)
				setError(true)
			})
	}, [])

	return { data, loading, error }
}
