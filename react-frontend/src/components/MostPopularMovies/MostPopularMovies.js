import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MostPopularMovies.css'; // Import the CSS file

function GrabCatalogApiService() {
    const [catalogData, setCatalogData] = useState([]);
    var apiGatewayUrl = "";

    if (process.env.NODE_ENV === 'development') {
        // Code specific to development environment
        console.log('Development Mode');
        apiGatewayUrl = 'http://localhost:8001/api/popular';
      } else {
        // Code specific to production environment
        console.log('Production Mode2');
        apiGatewayUrl = '/api/popular';
      }
      


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiGatewayUrl);
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
