import "../css/Favorites.css"

function Favorites() {
    return <div className="favorites-empty">
        <h2>No Favorites Yet</h2>
        <p>You haven't added any movies to your favorites yet.</p>
    </div>
}

export default Favorites

// routing info
// to use routing, you would have to install react-router-dom in the terminal
// npm install react-router-dom