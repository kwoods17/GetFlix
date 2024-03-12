import React from 'react'
import Slider from 'react-slick'
// import './css/slick.css'; 
// import './css/slick-theme.css'; 


const movies = [
    { title: "Movie 1", image: "movie1_poster.jpg" },
    { title: "Movie 2", image: "movie2_poster.jpg" },
    // Add more movie objects 
]
function MovieCarousel() {
    const settings = {
        dots: true,  // Add dots for navigation
        infinite: true, // Enable infinite loop
        slidesToShow: 3, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
    }
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {movies.map((movie) => (
                    <div key={movie.title}>
                        <h3>{movie.title}</h3>
                        <img src={movie.image} alt={movie.title} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MovieCarousel;
