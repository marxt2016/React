import { apiUrlFilms } from "../../components/utils";

export const REQUEST_FILMS_LOADING = "FILMS::REQUEST_LOADING";
export const REQUEST_FILMS_FAILURE = "FILMS::REQUEST_FAILURE";
export const REQUEST_FILMS_SUCCESS = "FILMS::REQUEST_SUCCESS";

export const getFilmsLoading = () => ({
    type: REQUEST_FILMS_LOADING,
});
export const getFilmsSuccess = (articles) => ({
    type: REQUEST_FILMS_SUCCESS,
    payload: articles,
});
export const getFilmsFailure = (err) => ({
    type: REQUEST_FILMS_FAILURE,
    payload: err,
});

export const getFilms = () => async (dispatch) => {
    dispatch(getFilmsLoading());

    try {
        const response = await fetch(apiUrlFilms);
        console.log(response);

        if (!response.ok) {
            throw new Error("Please reload the page");
        }

        const result = await response.json();

        dispatch(getFilmsSuccess(result.Search));
    } catch (err) {
        dispatch(getFilmsFailure(err.message));
    }
};
