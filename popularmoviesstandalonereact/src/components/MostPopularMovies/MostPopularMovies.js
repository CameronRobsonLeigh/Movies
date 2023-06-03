import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MostPopularMovies.css'; // Import the CSS file

function GrabCatalogApiService() {
    const [catalogData, setCatalogData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44386/MostPopularMovies/popular');
                setCatalogData(response.data.results);
                console.log(response.data.results);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h3 className="catalog-title">Movie Catalog</h3>
            <ul className="movie-list">
                {catalogData.map((movie) => (
                    <li key={movie.id} className="movie-item">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="movie-poster" />
                        <div className="movie-details">
                            <h4 className="movie-title">{movie.title}</h4>
                            <p className="movie-overview">{movie.overview}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GrabCatalogApiService;
