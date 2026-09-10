export async function load({ params, fetch }) {
	const res = await fetch(
		`https://fdnd.directus.app/items/person?filter[id][_eq]=${params.id}`
	)

	const data = await res.json()

	return {
		person: data.data[0]
	}
}