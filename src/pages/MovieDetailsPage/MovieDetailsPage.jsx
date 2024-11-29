import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../service/apiMovies";
import s from "./MovieDetailsPage.module.css";
import { HiArrowLeft } from "react-icons/hi";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state ?? "/movies");
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading data ....</h2>;
  }

  return (
    <div className={s.wrapper}>
      <Link to={goBackLink.current} className={s.link}>
        <HiArrowLeft size="24px"></HiArrowLeft>Go back
      </Link>

      <div className={s.container}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            width="300"
          />
        </div>
        <div className={s.description}>
          <h1>
            {movie.title} ({movie.release_date})
          </h1>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <ul className={s.list}>
            <li>User Score: {movie.vote_average}</li>
            <li>Release date: {movie.release_date}</li>
            <li>
              <a href={movie.homepage} target="_blank">
                {movie.homepage}
              </a>
            </li>
            <li>Runtime: {movie.runtime} min.</li>
            <li>Slogan: {movie.tagline}</li>
          </ul>
          <h3>Genres</h3>{" "}
          <ul>
            {movie.genres.map((genres) => (
              <li key={genres.id} className={s.item}>
                {genres.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3>Additional information</h3>
      <nav className={s.nav}>
        <Link to="cast" className={s.cast}>
          Cast
        </Link>
        <Link to="reviews" className={s.cast}>
          Reviews
        </Link>
      </nav>

      <Suspense fallback={<div>Loading subpage...</div>}>
        {" "}
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;