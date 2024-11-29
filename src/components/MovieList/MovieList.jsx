import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import s from "../MovieList/MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.item}>
            <Link
              to={`/movies/${movie.id}`}
              state={location}
              className={s.link}
            >
              {movie.title} ({movie.release_date.slice(0, 4)})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
