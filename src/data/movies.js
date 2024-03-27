const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzlkZTU4NDZkZGY5ODYzYmVjOTYwYTJlYmIxZmYyYyIsInN1YiI6IjY1ZjM2MTAwNWE3ODg0MDEzMGQ3MDI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1HR45CQQ2dDyTkz-b7aFl3c6hEi5lzzWAyMC60iY66o'
  }
};

export const fetchTrendingMovies = () => {
  return fetch('https://api.themoviedb.org/3/trending/all/day?language=es-ES', options)
      .then(response => response.json())
      .then(response => response.results) // Adjust here if necessary, assuming response contains a 'results' field
      .catch(err => console.error(err));
};
