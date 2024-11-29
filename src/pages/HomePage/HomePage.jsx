import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../service/apiMovies";
import MovieList from "../../components/MovieList/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;