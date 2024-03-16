import styled from 'styled-components'
import { useState, useEffect } from 'react'

const StyledMovieCard = styled.div`
.movie-card img {
    max-width: 100%; /* Image scales down responsively */
    height: auto;  /* Maintains aspect ratio */
}
`

function MovieCard({ movie }) { //receive a movie object
    const [posterURL, setPosterURL] = useState(null)

    
        const getImageBaseURL = async () => { 
            // const apiKey = import.meta.env.VITE_TMDB_API_KEY 
            const baseUrl = 'https://api.themoviedb.org/3'
            const configResponse = await fetch(`${baseUrl}/configuration?api_key=${apiKey}`)
            const configData = await configResponse.json()
            return configData.images.secure_base_url;
        };
    
        const fetchMoviePoster = async (query) => { 
            const imageBaseURL = await getImageBaseURL()
            const baseUrl = 'https://api.themoviedb.org/3'

            const apiKey = import.meta.env.VITE_TMDB_API_KEY
            const searchUrl = `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${query}`
            const response = await fetch(searchUrl)
            const data = await response.json()

            const firstMoviePoster = imageBaseURL + 'w342' + data.results[0].poster_path
            setPosterURL(firstMoviePoster)
        };
        useEffect(() => {
        fetchMoviePoster(searchQuery) // Pass the searchQuery prop
    }, [searchQuery]); // Add searchQuery to the dependency array
    fetchMoviePoster(searchQuery).then(posters => setMoviePosters(posters));
} [searchQuery]
return (
    <StyledMovieCard>
    {movie.poster_path && <img src={imageBaseURL + 'w342' + movie.poster_path} alt="Movie Poster" />}
    <h3>{movie.title}</h3> 
</StyledMovieCard> 
    );
    

function MovieResults({ searchQuery }) {
            const [moviePosters, setMoviePosters] = useState([]);
        
         
        
            useEffect(() => {
                // fetchMoviePoster logic
               
        
            return (
                <div className="movie-grid"> 
                    {moviePosters.map((posterURL) => (
                        <MovieCard key={movie.id} movie={{ poster_path: posterURL, title:movie.title/* get movie title from data */ }}> 
                            {movie.poster_path && <img src={imageBaseURL + 'w342' + movie.poster_path} alt="Movie Poster" />}
                            <h3>{movie.title}</h3> 
                        </MovieCard> 
                    ))}
                </div>
            );
        },
    
        export default MovieResults
