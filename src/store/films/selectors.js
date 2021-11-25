export const selectFilmsList = (state) => state.films.filmsList;
export const selectFilmsLoading = (state) =>
    state.films.request.status === 0;
export const selectFilmsError = (state) => state.films.request.error;