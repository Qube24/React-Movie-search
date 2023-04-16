// fetch trending for home

export const fetchMovies = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=b32896ed8f56a3105cdf45e097423bca'
  );
  const trendingJson = await res.json();
  return trendingJson;
};

// fetch search for Movies

export const searchMovies = async value => {
  console.log(value);
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=b32896ed8f56a3105cdf45e097423bca&language=en-US&page=1&include_adult=false&query=${value}`
  );
  const searchJson = await res.json();

  return searchJson;
};

// fetch details for MoviesDetails

export const details = async movieId => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=b32896ed8f56a3105cdf45e097423bca&language=en-US`
  );
  const detailsJson = await res.json();
  return detailsJson;
};

// fetch cast for Cast

export const fetchCast = async movieId => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b32896ed8f56a3105cdf45e097423bca&language=en-US`
  );
  const castJson = await res.json();

  return castJson;
};

// fetch reviews for Reviews

export const fetchReviews = async movieId => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b32896ed8f56a3105cdf45e097423bca&language=en-US`
  );
  const reviewsJson = await res.json();

  return reviewsJson;
};
