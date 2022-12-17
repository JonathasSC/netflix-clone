import React, { useState } from "react";
import './MovieRow.css'

export default ({title, items}) => {
	const [scrollX, setScrollX] = useState(-400);

	const handleLeftArrow = () => {
		let x = scrollX + Math.round(window.innerWidth / 2);
		if ( x > 0) {
			x = 0;
		}
		setScrollX(x)
	}
	const handleRightArrow = () => {
		let x = scrollX - Math.round(window.innerWidth / 2);
		let listW = items.results.length * 150
		if((window.innerWidth - listW) > x) {
			x = (window.innerWidth - listW) - 60;
		}
		setScrollX(x)
	}

	return (
		<div className="movieRow">
			<h2>{title}</h2>
			
			<div className="movieRow--left" onClick={handleLeftArrow}>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293"/> </svg>
			</div>

			<div className="movieRow--right"  onClick={handleRightArrow}>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293"/> </svg>
			</div>

			<div className="movieRow--listarea">
				<div className="movieRow--list" style={{
					marginLeft: scrollX,
					width: items.results.length * 150
				}}>
					{items.results.length > 0 && items.results.map((item, key) => (
						<div className="movieRow--item">
							<img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}