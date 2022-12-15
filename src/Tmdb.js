const API_KEY = '1b4b4d761656942e48d8440b72c4a977'
const API_BASE = 'https://api.themoviedb.org/3'

/*
- originais da netflix
- recomendados
- em alta 
- ação
- terror
- romance
- documentario
*/

const basicFetch = async (endpoint) => {
	const req = await fetch(`${API_BASE}${endpoint}`);
	const json = await req.json();
	return json
}

export default {
	getHomeList: async () => {
		return [
			{
				slug: 'originals',
				title: 'Originais Netflix',
				items: await basicFetch(`/discover/tv`)
			},
			{
				slug: 'trending',
				title: 'Recomendados para Você',
				items: await basicFetch(``)
			},
			{
				slug: 'toprated',
				title: 'Em alta',
				items: await basicFetch(``)
			},
			{
				slug: 'action',
				title: 'Ação',
				items: await basicFetch(``)
			},
			{
				slug: 'comedy',
				title: 'Comédia',
				items: await basicFetch(``)
			},
			{
				slug: 'romance',
				title: 'Romance',
				items: await basicFetch(``)
			},
			{
				slug: 'documentary',
				title: 'Documentários',
				items: await basicFetch(``)
			},
		];
	}
}