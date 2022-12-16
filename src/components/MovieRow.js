import React from "react";
import './MovieRow.css'

export default ({title, items}) => {
	return (
		<div className="movieRow">
			<h2>{title}</h2>
			
			<div className="movieRow--left">
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293"/> </svg>
			</div>

			<div className="movieRow--right">
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293"/> </svg>
			</div>

			<div className="movieRow--listarea">
				<div className="movieRow--list">
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