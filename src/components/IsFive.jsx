import { useMemo } from 'react'

let renderCount = 0

export default function IsFive(props) {
	console.warn(`🔴 isFive render: ${++renderCount}`)

	const { value } = props

	const getResult = useMemo(() => {
		let i = 0
		while (i < 600_000_000) i++

		return value === 5 ? "✅ It's five :D" : '🚫 It is not five :('
	}, [value])

	return <h3>{getResult}</h3>
}
