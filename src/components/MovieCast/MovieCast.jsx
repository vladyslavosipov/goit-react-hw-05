import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../service/apiMovies";
import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieCast(movieId);
      setCast(data);
    };
    getData();
  }, [movieId]);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {cast.map((actor) => (
          <li key={actor.id} className={s.item}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              width="100"
            />
            <p>{actor.name}</p>
            <p>
              <span>Character:</span>
              {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;