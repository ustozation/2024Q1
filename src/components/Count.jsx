const render = {
	count1: 0,
	count2: 0,
}

export default function Count(props) {
	const { id, value } = props

	console.warn(`🔴 Count${id} render: ${++render[`count${id}`]}`)

	return (
		<div>
			<h1>{value}</h1>
		</div>
	)
}
