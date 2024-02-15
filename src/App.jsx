import React, { useCallback, useRef, useState } from 'react';
import './index.css';

const API_KEY = '2adc667e';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const searchInputRef = useRef();

  const handleSearch = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}&s=${searchInputRef.current.value}`);
      const data = await response.json();
      console.error('Error fetching movies:', data.Error, data.Search);
      if (data.Search) {
        setSearchResults(data.Search.slice(0, 3));
      } else {
        setSearchResults([]);
        setErrorMessage(data.Error);
      }
    } catch (error) {
      setErrorMessage(error);
    }
  }, [searchInputRef]);

  return (
    <div className="container">
      <h1>Movie Search</h1>
      <div className="search-bar">
        <input type="text" ref={searchInputRef} placeholder="Search for a movie..." />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResults.length === 0 && <p>{errorMessage}</p>}
      <div className="movies-container">
        {searchResults.map(movie => (
          <div key={movie.imdbID} className="movie">
            <h2>{movie.Title}</h2>
            <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
              <img src={movie.Poster} alt={movie.Title} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
