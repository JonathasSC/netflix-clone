import React, { useEffect, useState } from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

	const [movieList, setMovieList ] = useState([]);
	const [featuredData, setFeaturedData] = useState(null);
	const [blackHeader, setBlackHeader] = useState(false)

	useEffect(() => {
		const loadAll = async () => {
			// Pegando a lista TOTAL
			let list = await Tmdb.getHomeList();  
			setMovieList(list)

			// Pegando o featured
			let originals = list.filter(i=>i.slug === 'originals');
			let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
			let chosen = originals[0].items.results[randomChosen];
			let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

			setFeaturedData(chosenInfo);
		};
		loadAll();
	}, 
	[]);

	useEffect(() => {
		const scrollListner = () => {
			if (window.scrollY > 2){ 
				setBlackHeader(true);
			} else {
				setBlackHeader(false)
			}
		}
		window.addEventListener('scroll', scrollListner);
		return () => {
			window.removeEventListener('scroll',scrollListner);
		}
	},[]);


	return (
		<div className='page'>

			<Header black={blackHeader} />

			{featuredData && 
				<FeaturedMovie item={featuredData}/>
			}

			<section className='lists'>
				{movieList.map((item, key) => (
					<MovieRow key={key} title={item.title} items={item.items} /> //Estou passado duas props ( title e item )
				))}
			</section>

			<footer>
				Feito por Jonathas Santos<br/>
				Direitos de imagem para Netflix<br/>
				Dados pego do site themoviedb.org<br/>
			</footer>

				
			{movieList.length <= 0 && 
				<div className='loading'>
					<img src='https://hips.hearstapps.com/pop.h-cdn.co/assets/16/48/1480516731-4f155204-7266-486d-88a5-2018ff11f947.gif?resize=980:*' alt='carregando'></img>
				</div>
			}
		</div>
	)
}