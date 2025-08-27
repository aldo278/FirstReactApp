import { Route, Routes } from 'react-router-dom';
import './css/App.css'
// this is how to import a default export

import NavBar from './components/NavBar';
import Home from './pages/Home';
import { MovieProvider } from './contexts/MovieContext';
import Favorites from './pages/Favorites';

// a component is a function in JavaScript that returns some JSX 
// always start the components with a capital letter
function App() {
  return (
    // Components must return a single parent element
    // which is why another div won't work here
    //<div></div>

    // however we can wrap everything in a fragment
    // then we can have multiple elements inside

    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

      </main>
    </MovieProvider>
  );
}

export default App
