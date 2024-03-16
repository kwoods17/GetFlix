import { useState } from 'react'
import Header from '/src/components/Header'
import MovieCard from './components/MovieCard'
import MovieCarousel from './components/MovieCarousel'

function App() {
  const [count, setCount] = useState(0)
  const fetchMoviePoster = async (query) => {

  }
  return (
    <>
      <div>
        <Header />
       
        <div id="movie-grid-container"> 
        <div className="carousel-container">
        <MovieCarousel /> 
      </div>
        <MovieCard /> 
          <MovieCard />
          <MovieCard /> 
          <MovieCard />
          <MovieCard /> 
          <MovieCard />
          <MovieCard /> 
          <MovieCard />
    </div> 
      </div>
    </>
  )
}
export default App
