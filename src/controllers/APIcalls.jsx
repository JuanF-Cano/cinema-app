import api from "../config/axios";

//LLAMADOS DE PELICULAS

//obtener peliculas populares
export const getPopularMovies = async () => {
  const response = await api.get("/movie/popular");
  return response.data.results;
};

//obtener peliculas en cartelera
export const getTrendingMovies = async () => {
  const response = await api.get("/trending/movie/week");
  return response.data.results;
};

//obtener detalles de una pelicula segun id
export const getMovieDetails = async (id) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

//obtener peliculas segun id del genero
export const getMoviesByGenre = async (genreId) => {
  const response = await api.get("/discover/movie", {
    params: { with_genres: genreId },
  });
  return response.data.results;
};

//obtener peliculas similares segun id de pelicula
export const getSimilarMovies = async (id) => {
  const response = await api.get(`/movie/${id}/similar`);
  return response.data.results;
};

//obtener peliculas segun busqueda
export const searchMovies = async (query) => {
  const response = await api.get("/search/movie", {
    params: { query },
  });
  return response.data.results;
};

//obtener generos de peliculas
export const getMovieGenres = async () => {
  const response = await api.get("/genre/movie/list");
  return response.data.genres;
};

//LLAMADOS DE SERIES

//obtener series populares
export const getPopularTVShows = async () => {
  const response = await api.get("/tv/popular");
  return response.data.results;
};

//obtener series en cartelera
export const getTrendingTVShows = async () => {
  const response = await api.get("/trending/tv/week");
  return response.data.results;
};

//obtener detalles segun id de serie
export const getTVShowDetails = async (id) => {
  const response = await api.get(`/tv/${id}`);
  return response.data;
};

//obtener series segun id de genero
export const getTVShowsByGenre = async (genreId) => {
  const response = await api.get("/discover/tv", {
    params: { with_genres: genreId },
  });
  return response.data.results;
};

//obtener series similares segun serie id
export const getSimilarTVShows = async (id) => {
  const response = await api.get(`/tv/${id}/similar`);
  return response.data.results;
};

//obtener series segun busqueda
export const searchTVShows = async (query) => {
  const response = await api.get("/search/tv", {
    params: { query },
  });
  return response.data.results;
};

//obtener generos de series
export const getTVGenres = async () => {
  const response = await api.get("/genre/tv/list");
  return response.data.genres;
};

//LLAMADOS DE PERSONAS

//obtener personas populares
export const getPopularPeople = async () => {
  const response = await api.get("/person/popular");
  return response.data.results;
};

//obtener personas segun id
export const getPersonDetails = async (id) => {
  const response = await api.get(`/person/${id}`);
  return response.data;
};

//obtener creditos (fama) de personas segun id
export const getPersonCredits = async (id) => {
  const response = await api.get(`/person/${id}/combined_credits`);
  return response.data.cast;
};

//obtener personas segun busqueda
export const searchPeople = async (query) => {
  const response = await api.get("/search/person", {
    params: { query },
  });
  return response.data.results;
};

// LLAMADAS DE BUSQUEDA GENERAL
export const searchAll = async (query) => {
  const response = await api.get("/search/multi", {
    params: { query },
  });
  return response.data.results;
};
