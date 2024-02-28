class APIClient {
	constructor() {
		this.baseURL = 'https://jsonplaceholder.typicode.com'
	}

	async getData(endpoint, headers, params) {
		const url = `${this.baseURL}${endpoint}`

		try {
			const response = await fetch(url, {
				method: 'GET',
				params: params,
				headers: {
					'Content-type': 'application/json',
					...headers,
				},
			})

			if (!response.ok) {
				throw new Error(`Failed to fetch data: ${response.status}`)
			}

			return await response.json()
		} catch (err) {
			throw new Error(err)
		}
	}

	async postData(endpoint, body, headers, params) {
		const url = `${this.baseURL}${endpoint}`

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					...headers,
				},
				body: JSON.stringify(body),
				params,
			})

			if (!response.ok) {
				throw new Error(`Failed to fetch data: ${response.status}`)
			}

			return await response.json()
		} catch (err) {
			throw new Error(err)
		}
	}
}

const apiClient = new APIClient()

export { apiClient }
