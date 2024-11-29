import { useState, useEffect } from "react";
import { searchMovies } from "../../service/apiMovies";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const handleSearch = (newValue) => {
    setSearchParams({ query: newValue });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        const results = await searchMovies(query);
        setMovies(results || []);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;