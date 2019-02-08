import fetch from 'isomorphic-fetch'
import mem from 'mem';

async function jsonFetch(pathname) {
	console.log('real fetch');
	const res = await fetch(`https://api.hnpwa.com/v0${pathname}.json`)
	return res.json()
}
export default mem(jsonFetch)
