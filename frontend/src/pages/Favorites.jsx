import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"


function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return (
            <div>
                <h2 className="favorites">Your Favorites</h2>
            <div className="movies-grid">
                {favorites.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            </div>
        );
    }

    return <div className="favorites-empty">
        <h2>No Favorites Yet</h2>
        <p>You haven't added any movies to your favorites yet.</p>
    </div>
}

export default Favorites

// routing info
// to use routing, you would have to install react-router-dom in the terminal
// npm install react-router-dom