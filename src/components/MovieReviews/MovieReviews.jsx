import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../service/apiMovies";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data || []);
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length > 0
          ? reviews.map((review) => (
              <li key={review.id}>
                <p>{review.content}</p>
                <p>Author: {review.author}</p>
              </li>
            ))
          : "No reviews available"}
      </ul>
    </div>
  );
};

export default MovieReviews;