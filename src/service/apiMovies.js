import axios from "axios";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjRiZjU1ZTk2YThjOTlhNDNjYjY0NzNkNjQ4NzQ2NCIsIm5iZiI6MTczMjE4NDkyMy44MzgxODc1LCJzdWIiOiI2NzNkZWQ5NmQzZmYxNDkwNmY5NjJjYWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.twZNCnf53OBATdlMuirlOvyua98qrRrl31h32FfTSYo";

const BASE_URL = "https://api.themoviedb.org/3";
export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.results;
};
export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}`, {
    headers: { accept: "application/json", Authorization: `Bearer ${API_KEY}` },
  });
  return data;
};

export const fetchMovieCast = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.cast;
};

export const fetchMovieReviews = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.results;
};
export const searchMovies = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    params: { query },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.results;
};