let renderCount = 0

export default function IsFive(props) {
	const { value } = props
	console.warn(`🔴 isFive render: ${++renderCount}`)

	const getResult = () => {
		let i = 0
		while (i < 600000000) i++
		return value === 5 ? "✅ It's five :D" : '❌ It is not five :('
	}

	return <h3>{getResult()}</h3>
}
