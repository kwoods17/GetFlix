import React from 'react'
import styled from 'styled-components'



const StyledMovieCard = styled.div`
.movie-card img {
    max-width: 100%; /* Image scales down responsively */
    height: auto;  /* Maintains aspect ratio */
}
`

function MovieCard() {
    const [posterURL, setPosterURL] = useState(null);

    useEffect(() => {
        const getImageBaseURL = async () => {
            const apiKey = process.env.REACT_APP_TMDB_API_KEY
            const baseUrl = 'https://api.themoviedb.org/3'
            const configResponse = await fetch(`${baseUrl}/configuration?api_key=${apiKey}`); 
            const configData = await configResponse.json()
            return configData.images.secure_base_url
        }

        const fetchMoviePoster = async (searchQuery) => {
            const imageBaseURL = await getImageBaseURL();
            const apiKey = process.env.REACT_APP_TMDB_API_KEY;
            const baseUrl = 'https://api.themoviedb.org/3'
        };

        fetchMoviePoster()
    }, []);

    return (
        <StyledMovieCard>
            {/* Placeholder movie image and title */}
            <img src="https://via.placeholder.com/250x300"  alt="Movie Poster" /> 
            <h3>Movie Title</h3> 
        </StyledMovieCard>
     )
 }

 export default MovieCard; 