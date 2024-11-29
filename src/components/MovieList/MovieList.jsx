/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import s from "../MovieList/MovieList.module.css";

// eslint-disable-next-line react/prop-types
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
              {movie.title}({movie.release_date.slice(0, 4)})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;