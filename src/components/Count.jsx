const render = {
	count1: 0,
	count2: 0,
}

export default function Count(props) {
	const { id, value } = props

	console.warn(`🔴 Count${id} render: ${++render[`count${id}`]}`)

	useEffect(() => {
		getPosts()
			.then(data => {
				console.log('then')
				console.log(data)
			})
			.catch(err => {
				console.log('catch')
				console.log(err)
			})
	}, [])

	return (
		<div>
			<h1>{value}</h1>
		</div>
	)
}
