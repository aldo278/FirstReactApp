import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api"


function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    // the useEffect allows you to add side effects to your functions or
    //to your components and define when they should run

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                setError("Failed to load popular movies. Please try again later.");
                console.error(err);
            }
            finally {
                setloading(false);
            }
        }
        loadPopularMovies();
    }, [])



    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Search For Movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>



        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <div className="movies-grid">
            {movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />)}
        </div>

        }
    </div>
}

export default Home