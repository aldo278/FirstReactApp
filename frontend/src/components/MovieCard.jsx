import "../css/MovieCard.css"

function MovieCard({movie}) {
  // in jsx, we use className instead of class because class is a reserved word in javascript

  function onFavoriteClick() {
    alert("Clicked!")
  }
  return <div className="movie-card">
    <div className="movie-poster">
        {/* when enbedding a variable here, simply use the curly braces */}
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
            <button className="favorite-btn" onClick={onFavoriteClick}>
                ❤︎
            </button>

        </div>
    </div>
    <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
    </div>


  </div>
}

// when exporting a component, always use the same name as the component
export default MovieCard