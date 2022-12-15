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
				items: await basicFetch(`/discover/tv?with_network=213&language=pt-br&api_key=${API_KEY}`)
			},
			{
				slug: 'trending',
				title: 'Recomendados para Você',
				items: await basicFetch(`/trending/all/week?language=pt-br&api_key=${API_KEY}`)
			},
			{
				slug: 'toprated',
				title: 'Em alta',
				items: await basicFetch(`/movie/top_rated?language=pt-br&api_key=${API_KEY}`)
			},
			{
				slug: 'action',
				title: 'Ação',
				items: await basicFetch(`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}`)
			},
			{
				slug: 'comedy',
				title: 'Comédia',
				items: await basicFetch(`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}`)
			},
			{
				slug: 'horror',
				title: 'Terror',
				items: await basicFetch(`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}`)
			},
			{
				slug: 'romance',
				title: 'Romance',
				items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}`)
			},
			{
				slug: 'documentary',
				title: 'Documentários',
				items: await basicFetch(`/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY}`)
			},
		];
	}
}