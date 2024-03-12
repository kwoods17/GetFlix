import { useState, React } from 'react'
import Header from '/src/components/header'
import Navigation from '/src/components/navigation'
import SearchBar from '/src/components/searchBar'
import MovieCard from './components/movieCard'
import Hero from './components/hero'
import MovieCarousel from './components/movieCarousel'

function App() {
  const [count, setCount] = useState(0)

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
